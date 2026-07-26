const getDisplayUrl = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const BrowserMockup = ({ url, aspectRatio, children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface overflow-hidden shadow-[0_24px_60px_-20px_rgba(10,14,31,0.18)] ${className}`}
    >
      <div className="flex items-center gap-4 h-10 px-4 border-b border-border bg-surface/80">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-muted/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted/30" />
        </div>
        {url && (
          <div className="flex-1 min-w-0 flex justify-center">
            <span className="inline-flex items-center max-w-full rounded-full border border-border bg-background px-3 py-1 text-[11px] font-mono text-muted truncate">
              {getDisplayUrl(url)}
            </span>
          </div>
        )}
      </div>
      <div className="relative w-full bg-background" style={{ aspectRatio }}>
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup;
