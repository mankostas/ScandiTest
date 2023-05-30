export interface SideMenuContainerMapStateProps {
    isOpen: boolean;
}

export interface SideMenuContainerMapDispatchProps {
    showSideMenu: (isOpen: boolean) => void;
    hideSideMenu: (isOpen: boolean) => void;
}

// export interface SideMenuContainerBaseProps {

// }

// export interface SideMenuContainerFunctions {}

export type SideMenuContainerProps = SideMenuContainerMapStateProps & SideMenuContainerMapDispatchProps;

//& SideMenuContainerBaseProps; 

export interface SideMenuComponentProps {
    isOpen?: boolean;
}

export type SideMenuContainerPropsKeys = 'isOpen';
