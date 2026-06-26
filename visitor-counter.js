/**
 * Unique Visitor Counter for Al Francis Paz's Portfolio
 * =====================================================
 * Uses Firebase Realtime Database (free tier) to track unique visitors
 * by IP address across ALL devices — everyone sees the same count.
 * 
 * How it works:
 * 1. Fetches visitor's IP from ipify.org
 * 2. Hashes the IP with SHA-256 for privacy
 * 3. Checks Firebase if this IP hash already exists
 * 4. If new: stores the hash and increments the global count
 * 5. Displays the shared count with a smooth animation
 * 
 * Firebase Setup (free, 1 minute):
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project (any name, e.g., "afp-portfolio")
 * 3. Go to Realtime Database → Create Database → Start in TEST mode
 * 4. Copy the database URL and paste it in FIREBASE_CONFIG below
 * 5. That's it!
 */

(function () {
    'use strict';

    // ========================================
    // ⚡ FIREBASE CONFIGURATION
    // Replace this URL with your Firebase Realtime Database URL
    // ========================================
    const FIREBASE_DB_URL = 'https://afp-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app';

    // ========================================
    // SHA-256 hash for IP privacy
    // ========================================
    async function hashIP(ip) {
        const encoder = new TextEncoder();
        const data = encoder.encode(ip + '_afp_portfolio_2026_salt');
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // ========================================
    // Get visitor's public IP
    // ========================================
    async function getVisitorIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json', {
                signal: AbortSignal.timeout(5000)
            });
            if (!response.ok) throw new Error('Failed');
            const data = await response.json();
            return data.ip;
        } catch {
            try {
                // Fallback
                const response = await fetch('https://api64.ipify.org?format=json', {
                    signal: AbortSignal.timeout(5000)
                });
                if (!response.ok) throw new Error('Failed');
                const data = await response.json();
                return data.ip;
            } catch {
                return null;
            }
        }
    }

    // ========================================
    // Firebase REST API helpers (no SDK needed)
    // ========================================
    async function firebaseGet(path) {
        const response = await fetch(`${FIREBASE_DB_URL}/${path}.json`);
        if (!response.ok) throw new Error('Firebase read failed');
        return await response.json();
    }

    async function firebasePut(path, data) {
        const response = await fetch(`${FIREBASE_DB_URL}/${path}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Firebase write failed');
        return await response.json();
    }

    // ========================================
    // Animate the counter number
    // ========================================
    function animateCounter(element, targetCount) {
        if (targetCount <= 0) targetCount = 1;

        let current = 0;
        const duration = 1200;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.floor(eased * targetCount);
            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = targetCount;
            }
        }

        requestAnimationFrame(step);
    }

    // ========================================
    // Main tracking logic
    // ========================================
    async function trackVisitor() {
        const counterElement = document.getElementById('visitor-count');
        if (!counterElement) return;

        try {
            // Step 1: Get the visitor's IP
            const ip = await getVisitorIP();
            if (!ip) {
                // Can't determine IP, just show current count
                const count = await firebaseGet('visitorCount');
                animateCounter(counterElement, count || 0);
                return;
            }

            // Step 2: Hash the IP
            const ipHash = await hashIP(ip);
            // Use first 16 chars as Firebase key (safe characters)
            const hashKey = ipHash.substring(0, 32);

            // Step 3: Check if this IP hash already exists in Firebase
            const existingVisitor = await firebaseGet(`visitors/${hashKey}`);

            if (existingVisitor) {
                // Already counted — just show the current global count
                const count = await firebaseGet('visitorCount');
                animateCounter(counterElement, count || 1);
            } else {
                // New unique visitor!
                // Step 4a: Store the IP hash
                await firebasePut(`visitors/${hashKey}`, {
                    firstVisit: new Date().toISOString(),
                    hash: hashKey
                });

                // Step 4b: Get current count and increment
                let currentCount = await firebaseGet('visitorCount');
                currentCount = (currentCount || 0) + 1;
                await firebasePut('visitorCount', currentCount);

                // Step 5: Display with animation
                animateCounter(counterElement, currentCount);
            }

        } catch (error) {
            console.log('Visitor counter: Firebase unavailable, using fallback');
            // Fallback to localStorage if Firebase is unreachable
            fallbackCount(counterElement);
        }
    }

    // ========================================
    // Fallback: localStorage only (if Firebase fails)
    // ========================================
    function fallbackCount(element) {
        const counted = localStorage.getItem('afp_visitor_counted');
        let count = parseInt(localStorage.getItem('afp_visitor_count') || '0', 10);

        if (!counted) {
            count++;
            localStorage.setItem('afp_visitor_counted', 'true');
            localStorage.setItem('afp_visitor_count', count.toString());
        }

        animateCounter(element, count || 1);
    }

    // ========================================
    // Initialize
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackVisitor);
    } else {
        trackVisitor();
    }

})();
