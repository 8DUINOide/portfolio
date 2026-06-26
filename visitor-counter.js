/**
 * Unique Visitor Counter for Al Francis Paz's Portfolio
 * =====================================================
 * Tracks unique devices visiting the website based on IP address.
 * 
 * How it works:
 * 1. Fetches the visitor's IP address using the free ipify.org API
 * 2. Hashes the IP with SHA-256 for privacy
 * 3. Checks localStorage to see if this IP was already counted
 * 4. If new IP: increments the counter and stores the hash
 * 5. Displays the count with a smooth counting animation
 * 
 * Storage Strategy:
 * - Uses localStorage to persist the count and known IP hashes
 * - The count survives page refreshes on the same device
 * - Each new IP (different device/network) adds +1
 * - Same device revisiting does NOT increment
 * 
 * Note: Since this is a static site with no backend, the counter
 * is per-device persistent. If you want cross-device sync (so the
 * count is the same number on ALL devices), you would need to add
 * a backend database (Firebase, Supabase, etc.). The current setup
 * counts correctly per-device and persists the count locally.
 */

(function () {
    'use strict';

    // ========================================
    // Configuration
    // ========================================
    const STORAGE_KEYS = {
        COUNTED: 'afp_visitor_counted',      // Flag: was this browser already counted?
        COUNT: 'afp_visitor_count',           // The total unique visitor count
        IP_HASHES: 'afp_ip_hashes',          // Array of hashed IPs we've seen
        LAST_IP_HASH: 'afp_last_ip_hash',    // Last known IP hash for this device
    };

    // ========================================
    // Utility: SHA-256 hash for IP privacy
    // ========================================
    async function hashIP(ip) {
        const encoder = new TextEncoder();
        // Salt the IP so raw IPs can't be reverse-looked-up
        const data = encoder.encode(ip + '_afp_portfolio_2026_salt');
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // ========================================
    // Get visitor's public IP via ipify (free)
    // ========================================
    async function getVisitorIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json', {
                signal: AbortSignal.timeout(5000) // 5 second timeout
            });
            if (!response.ok) throw new Error('IP fetch failed');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            // Fallback: try alternative free IP API
            try {
                const response = await fetch('https://ipinfo.io/json?token=', {
                    signal: AbortSignal.timeout(5000)
                });
                if (!response.ok) throw new Error('Fallback IP fetch failed');
                const data = await response.json();
                return data.ip;
            } catch (fallbackError) {
                console.log('Visitor counter: Could not determine IP');
                return null;
            }
        }
    }

    // ========================================
    // Get stored visitor data
    // ========================================
    function getStoredData() {
        return {
            counted: localStorage.getItem(STORAGE_KEYS.COUNTED) === 'true',
            count: parseInt(localStorage.getItem(STORAGE_KEYS.COUNT) || '0', 10),
            ipHashes: JSON.parse(localStorage.getItem(STORAGE_KEYS.IP_HASHES) || '[]'),
            lastIpHash: localStorage.getItem(STORAGE_KEYS.LAST_IP_HASH) || null,
        };
    }

    // ========================================
    // Save visitor data
    // ========================================
    function saveData(count, ipHashes, currentHash) {
        localStorage.setItem(STORAGE_KEYS.COUNTED, 'true');
        localStorage.setItem(STORAGE_KEYS.COUNT, count.toString());
        localStorage.setItem(STORAGE_KEYS.IP_HASHES, JSON.stringify(ipHashes));
        if (currentHash) {
            localStorage.setItem(STORAGE_KEYS.LAST_IP_HASH, currentHash);
        }
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

            // Ease-out cubic for smooth deceleration
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

        const stored = getStoredData();

        // Get the visitor's IP
        const ip = await getVisitorIP();

        if (ip) {
            const ipHash = await hashIP(ip);

            // Check if this IP hash is already known
            if (stored.ipHashes.includes(ipHash)) {
                // Same IP as before — don't increment, just show count
                animateCounter(counterElement, stored.count || 1);
                return;
            }

            // New unique IP! Increment the counter
            const newHashes = [...stored.ipHashes, ipHash];
            const newCount = stored.count + 1;

            saveData(newCount, newHashes, ipHash);
            animateCounter(counterElement, newCount);

        } else {
            // Couldn't get IP — fall back to localStorage flag
            if (!stored.counted) {
                // First visit on this browser, count it
                const newCount = stored.count + 1;
                saveData(newCount, stored.ipHashes, null);
                animateCounter(counterElement, newCount);
            } else {
                // Already counted, just show existing count
                animateCounter(counterElement, stored.count || 1);
            }
        }
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
