/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa-theme
 * @link https://github.com/scandipwa/scandipwa-theme
 */
import { AnyAction } from 'redux';

export enum SideMenuActionType {
    SHOW_SIDE_MENU = 'SHOW_SIDE_MENU',
    HIDE_SIDE_MENU = 'HIDE_SIDE_MENU',
}

export interface ShowSideMenuAction extends AnyAction {
    type: SideMenuActionType.SHOW_SIDE_MENU;
}

export interface HideSideMenuAction extends AnyAction {
    type: SideMenuActionType.HIDE_SIDE_MENU;
}

export type SideMenuAction = ShowSideMenuAction | HideSideMenuAction;

export interface SideMenuStore {
    isOpen: boolean;
}

declare module 'Util/Store/Store.type' {
    export interface RootState {
        SideMenuReducer: SideMenuStore;
    }
}
