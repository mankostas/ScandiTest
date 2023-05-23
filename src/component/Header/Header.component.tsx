import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Link from 'Component/Link';
import { ReactElement } from 'Type/Common.type';
import SidebarContent from 'Component/Sidebar/SidebarContent';
import { HeaderComponent as SourceHeaderComponent } from 'SourceComponent/Header/Header.component';

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
                    <SidebarContent />
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
