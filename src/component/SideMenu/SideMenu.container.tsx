import { PureComponent } from 'react';
import { ReactElement } from 'Type/Common.type';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SideMenu from './SideMenu.component';
import { showSideMenu, hideSideMenu } from 'Store/SideMenu/SideMenu.action';
import { RootState } from 'Util/Store/Store.type';

import {
    SideMenuComponentProps,
    // SideMenuContainerFunctions,
    SideMenuContainerMapDispatchProps,
    SideMenuContainerMapStateProps,
    SideMenuContainerProps,
    SideMenuContainerPropsKeys,
} from './SideMenu.type';

/** @namespace Elegento/Component/SideMenu/Container/mapStateToProps */
export const mapStateToProps = (state:RootState): SideMenuContainerMapStateProps => ({
    // wishlistItems: state.WishlistReducer.productsInWishlist
    isOpen: state.SideMenuReducer.isOpen,
});
/** @namespace Elegento/Component/SideMenu/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch: Dispatch): SideMenuContainerMapDispatchProps => ({
    // addProduct: options => CartDispatcher.addProductToCart(dispatch, options)
    showSideMenu: () => dispatch(showSideMenu()),
    hideSideMenu: () => dispatch(hideSideMenu()),
});

/** @namespace Elegento/Component/SideMenu/Container */
export class SideMenuContainer extends PureComponent<SideMenuContainerProps> {
    // containerFunctions: SideMenuContainerFunctions = {
    //     // getData: this.getData.bind(this)
    // };

    containerProps(): Pick<SideMenuComponentProps, SideMenuContainerPropsKeys> {
        const { isOpen } = this.props;

        return {
            isOpen,
        };
    }

    render():ReactElement {
        return (
            <SideMenu
            //   { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideMenuContainer);
