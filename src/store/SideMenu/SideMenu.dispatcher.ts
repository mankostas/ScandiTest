import { Dispatch } from 'redux';

// TODO update this import when renamed
import { showSideMenu, hideSideMenu } from 'Store/SideMenu/SideMenu.action';

/** @namespace Elegento/Store/SideMenu/Dispatcher */
export class SideMenuDispatcher {
    show(isOpen: boolean, dispatch: Dispatch): void {
        dispatch(showSideMenu());
    }

    hide(isOpen: boolean, dispatch: Dispatch): void {
        dispatch(hideSideMenu());
    }
}

export default new SideMenuDispatcher();
