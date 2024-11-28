const OtherProductContent: React.FC = () => {
  return (
    <div
      className="absolute top-70 w-304 xl:h-280 h-280 sm:h-240 bg-white rounded-2xl flex"
      data-testid="other-product-content"
    >
      {/* Left column dots */}
      <div
        className="flex flex-col gap-3 pl-21 pt-21"
        data-testid="dots-column"
      >
        <div data-testid="dot" className="w-3 h-3 bg-lime-500 rounded-10" />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-Product-primary rounded-10 mt-18"
        />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-Product-secondary rounded-10 mt-18"
        />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="dot"
          className="w-3 h-3 bg-neutral-background rounded-10"
        />
      </div>
      {/* Right bars */}
      <div
        className="flex flex-col gap-3 pl-4.5 pt-21"
        data-testid="bars-column"
      >
        <div data-testid="bar" className="w-169 h-3 bg-lime-500 rounded-10" />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-Product-primary rounded-10 mt-18"
        />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-Product-secondary rounded-10 mt-18"
        />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-neutral-background rounded-10"
        />
        <div
          data-testid="bar"
          className="w-169 h-3 bg-neutral-background rounded-10"
        />
      </div>
    </div>
  )
}

export default OtherProductContent
