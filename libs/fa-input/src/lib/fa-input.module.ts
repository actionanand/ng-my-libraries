import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAddressBook as farAddBook, faAddressCard as farAddCard, faEnvelope as farEnv, 
  faEnvelopeOpen as farEnvOpn, faEye as farEye, faEyeSlash as farEyeOpn, faIdCard as farId, faIdBadge as farIdBadge,
faImage as farImg, faCreditCard as farCc,
faEdit as farEdit, faUser as farUser, faCalendar as farCalendar,
 faPaperPlane as farPlane  } from '@fortawesome/free-regular-svg-icons';

import { faLock as fabLock, faLockOpen as fabLockOpn, faBirthdayCake as fabCake, faBitcoinSign as fabBitCoin,
faLink as fabLink , faAddressBook as fabAddBook, faAddressCard as fabAddCard, faEnvelope as fabEnv, 
faEnvelopeOpen as fabEnvOpn, faEye as fabEye, faEyeSlash as fabEyeOpn, faIdCard as fabId, faIdBadge as fabIdBadge,
faImage as fabImg, faCreditCard as fabCc,
faEdit as fabEdit, faUser as fabUser, faCalendar as fabCalendar,
faPaperPlane as fabPlane} from '@fortawesome/free-solid-svg-icons';
import { faAmazonPay, faAngular, faAndroid, faApple, faTwitter, faFacebook, faWhatsapp, faTelegram,
faGithub, faStackOverflow, faYoutube, faGooglePay, faPaypal, faCcPaypal, faStripe, faApplePay, faBitcoin, faChrome,
faDiscord, faInstagram, faLinkedin, faSkype, faSlack } from '@fortawesome/free-brands-svg-icons';

// import { far } from '@fortawesome/free-regular-svg-icons';

import { FaInputComponent } from './fa-input/fa-input.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [FaInputComponent],
  exports: [FaInputComponent]
})
export class FaInputModule {
  constructor(faLib: FaIconLibrary) {
    faLib.addIcons(farAddBook, farAddCard, farEnv, farEnvOpn, farEye, farEyeOpn, farId, farIdBadge, farImg,
       farCc, farEdit, farUser, farCalendar, farPlane, fabLink, fabLock, fabLockOpn, fabCake, fabBitCoin,
       fabAddBook, fabAddCard, fabEnv, fabEnvOpn, fabEye, fabEyeOpn, fabId, fabIdBadge, fabImg,
       fabCc, fabEdit, fabUser, fabCalendar, fabPlane, faAmazonPay, faAngular, faAndroid, faApple, faTwitter, faFacebook, faWhatsapp, faTelegram,
       faGithub, faStackOverflow, faYoutube, faGooglePay, faPaypal, faCcPaypal, faStripe, faApplePay, faBitcoin, faChrome,
       faDiscord, faInstagram, faLinkedin, faSkype, faSlack);

    // faLib.addIconPacks(far);
  }
}
