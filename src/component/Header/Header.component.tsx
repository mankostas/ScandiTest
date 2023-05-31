import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'Component/Link';
import { ReactElement } from 'Type/Common.type';
import { HeaderComponent as SourceHeaderComponent } from 'SourceComponent/Header/Header.component';
import SideMenu from 'Component/SideMenu';

/** @namespace Elegento/Component/Header/Component */
export class HeaderComponent extends SourceHeaderComponent {
    renderLogo(isVisible = false): ReactElement {
        const { isLoading } = this.props;
        const { device: { isMobile } } = this.props;

        if (isLoading) {
            return null;
        }

        if (isMobile) {
            return (
                <>
                    <SideMenu />
                    <Link
                      to="/"
                      aria-label="Go to homepage by clicking on ScandiPWA logo"
                      aria-hidden={ !isVisible }
                      tabIndex={ isVisible ? 0 : -1 }
                      block="Header"
                      elem="LogoWrapper"
                      mods={ { isVisible } }
                      key="logo"
                    >
                        { this.renderLogoImage() }
                    </Link>
                </>
            );
        }

        return (
            <Link
              to="/"
              aria-label="Go to homepage by clicking on ScandiPWA logo"
              aria-hidden={ !isVisible }
              tabIndex={ isVisible ? 0 : -1 }
              block="Header"
              elem="LogoWrapper"
              mods={ { isVisible } }
              key="logo"
            >
            { this.renderLogoImage() }
            </Link>
        );
    }

    // renderMenu(): ReactElement {
    //     const { isCheckout, device: { isMobile } } = this.props;

    //     if (isMobile || isCheckout) {
    //         return (
    //             <SidebarContent />
    //         );
    //     }

    //     return <Menu />;
    // }
}

export default HeaderComponent;
