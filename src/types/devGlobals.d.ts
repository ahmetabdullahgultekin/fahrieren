// Dev-only debug helpers attached to window in import.meta.env.DEV builds.
// Declared here so the util files can assign them without `as any`.
// (These are never present in production bundles.)
export {};

declare global {
    interface Window {
        createAdminUser?: (email: string, password: string) => Promise<unknown>;
        quickAdminSetup?: () => Promise<unknown>;
        fixProductViews?: () => Promise<unknown>;
        resetFavorites?: () => Promise<unknown> | void;
    }
}
