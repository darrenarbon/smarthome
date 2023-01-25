export type CategoryTabProps = {
  children: React.ReactNode;
  label: string;
};

export const CategoryTab = ({ children, label }: CategoryTabProps) => {
  const htmlLabel = label.replace(' ', '');
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${htmlLabel}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${htmlLabel}`}
          aria-expanded="true"
          aria-controls={`collapse${htmlLabel}`}
        >
          {label}
        </button>
      </h2>
      <div
        id={`collapse${htmlLabel}`}
        className="accordion-collapse show"
        aria-labelledby={`heading${htmlLabel}`}
      >
        <div className="accordion-body">
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
};
