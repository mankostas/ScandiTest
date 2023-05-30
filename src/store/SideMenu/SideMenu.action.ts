import {
    ShowSideMenuAction,
    HideSideMenuAction,
    SideMenuActionType,
} from './SideMenu.type';

/**
 * Toggle breadcrumbs display/hide
 * @param  {Boolean} isOpen
 * @return {void}
 * @namespace Elegento/Store/SideMenu/Action/showSideMenu
 */
export const showSideMenu = (): ShowSideMenuAction => ({
    type: SideMenuActionType.SHOW_SIDE_MENU,
});
/**
 * Toggle breadcrumbs display/hide
 * @param  {Boolean} isOpen
 * @return {void}
 * @namespace Elegento/Store/SideMenu/Action/hideSideMenu
 */
export const hideSideMenu = (): HideSideMenuAction => ({
    type: SideMenuActionType.HIDE_SIDE_MENU,
});
