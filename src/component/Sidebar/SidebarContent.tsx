import Menu from 'Component/Menu';

/** @namespace Elegento/Component/Sidebar/SidebarContent/SidebarContent */
export default function SidebarContent() {
    return (
        <>
      <div>
        <button
          style={ { background: '#fd7e14', border: 'none' } }
          className="btn btn-primary"
          data-bs-toggle="offcanvas"
          type="button"
          data-bs-target="#cst_sidebar"
          aria-controls="cst_sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
           { /* eslint-disable-next-line max-len */ }
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
          { /* eslint-disable-next-line max-len */ }
        </button>
      </div>
      <div
        className="offcanvas offcanvas-start"
        id="cst_sidebar"
        aria-labelledby="cst_sidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cst_sidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-x" />
          </button>
        </div>
        <div className="offcanvas-body">
          <Menu />
        </div>
      </div>
        </>
    );
}
