/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */

import Link from 'Component/Link';
import { ReactElement } from 'Type/Common.type';
import { CookiePopupComponent as SourceCookiePopupComponent } from 'SourceComponent/CookiePopup/CookiePopup.component';

import './CookiePopup.style';
import './CookiePopup.override.style';

/** @namespace Elegento/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopupComponent {
    renderCookieLink(): ReactElement {
        const { cookieLink } = this.props;

        if (!cookieLink) {
            return null;
        }

        return (
            <Link
              block="CookiePopup"
              elem="Link"
              to={ cookieLink }
            >
                { __(' Μάθετε περισσότερα') }
            </Link>
        );
    }

    renderCookieText(): ReactElement {
        return (
            <p block="CookiePopup" elem="Content">
                { __('Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας!  ') }
                { this.renderCookieLink() }
                { __(' σχετικά με τους κανόνες του GDPR στους όρους χρήσης') }
            </p>
        );
    }

    renderCTA(): ReactElement {
        return (
            <div
              block="CookiePopup"
              elem="CTA"
              onClick={ this.acceptCookies }
              onKeyDown={ this.acceptCookies }
              role="button"
              tabIndex={ 0 }
            >
                { __('Αποδοχή') }
            </div>
        );
    }

    render(): ReactElement {
        const { cookieText } = this.props;
        const { isAccepted } = this.state;

        if (!cookieText || isAccepted) {
            return null;
        }

        return (
            <div block="CookiePopup">
                { this.renderCookieText() }
                { this.renderCTA() }
            </div>
        );
    }
}

export default CookiePopupComponent;
