import { Reducer } from 'redux';

// TODO update this import when renamed
import { SideMenuAction, SideMenuStore } from './SideMenu.type';

/** @namespace Elegento/Store/SideMenu/Reducer/getInitialState */
export const getInitialState = (): SideMenuStore => ({
    isOpen: false,
});

/** @namespace Elegento/Store/SideMenu/Reducer/SideMenuReducer */
export const SideMenuReducer: Reducer<
SideMenuStore,
SideMenuAction
> = (
    state = getInitialState(),
    action,
) => {
    switch (action.type) {
    case 'SHOW_SIDE_MENU':

        return {
            ...state,
            isOpen: true,
        };
    case 'HIDE_SIDE_MENU':

        return {
            ...state,
            isOpen: false,
        };
    default:
        return state;
    }
};

export default SideMenuReducer;
