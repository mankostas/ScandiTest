import { PureComponent } from 'react';
import { ReactElement } from 'Type/Common.type';
import { SideMenuComponentProps } from './SideMenu.type';
import { useDispatch, useSelector } from 'react-redux';
import Menu from 'Component/Menu';

import './SideMenu.style';
import { showSideMenu, hideSideMenu } from 'Store/SideMenu/SideMenu.action';

/** @namespace Elegento/Component/SideMenu/Component */
export class SideMenuComponent extends PureComponent<SideMenuComponentProps> {
    render():ReactElement {
        const isOpen = useSelector((state:any) => state.SideMenuReducer.isOpen);
        const dispatch = useDispatch();
        const handleToggle = (isOpen:Boolean) => {
            if (!isOpen) {
                dispatch(showSideMenu());
            } else {
                dispatch(hideSideMenu());
            }
        };

        return (
            <>
            <div block="SideMenu">
                <button
                  style={ { background: '#fd7e14', border: 'none' } }
                  className="btn btn-primary"
                  data-bs-toggle="offcanvas"
                  type="button"
                  data-bs-target="#cst_sidebar"
                  aria-controls="cst_sidebar"
                  onClick={ () => handleToggle(isOpen) }
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
                { /* eslint-disable-next-line max-len */ }
                </svg>
                </button>
            </div>
            <div
              className={ ` offcanvas offcanvas-start ${isOpen ? 'show' : '' } ` }
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={ () => handleToggle(isOpen) }>
              { /* eslint-disable-next-line max-len */ }
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              { /* eslint-disable-next-line max-len */ }
              </svg>
              </button>
            </div>
            <div className="offcanvas-body">
              <Menu />
            </div>
            </div>
            </>
        );
    }
}

export default SideMenuComponent;
