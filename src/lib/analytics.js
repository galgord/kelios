/**
 * Lightweight analytics tracking utility using PostHog.
 *
 * Replace 'phc_XXXXXXXXXX' with your actual PostHog project API key
 * from https://app.posthog.com → Project Settings → Project API Key
 */

export function trackEvent(eventName, properties = {}) {
    if (typeof window !== 'undefined' && window.posthog) {
        window.posthog.capture(eventName, properties);
    }
}

// Pre-defined events for consistency
export function trackCTAClick(buttonText, location) {
    trackEvent('cta_clicked', {
        button_text: buttonText,
        location: location,
    });
}

export function trackFormSubmit(formType) {
    trackEvent('form_submitted', {
        form_type: formType,
    });
}

export function trackBlogView(slug, category) {
    trackEvent('blog_post_viewed', {
        slug: slug,
        category: category,
    });
}
