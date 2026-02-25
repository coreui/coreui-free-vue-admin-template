/**
 * Icon Set Configuration
 *
 * Centralized export of all CoreUI icons used in the application.
 * Combines three icon types from @coreui/icons:
 * - cil: CoreUI line icons (UI elements, actions, objects)
 * - cif: CoreUI flag icons (country flags)
 * - cib: CoreUI brand icons (company/service logos)
 *
 * Icons are provided globally via app.provide('icons', icons) in main.js
 * and can be used with the CIcon component.
 *
 * @module assets/icons
 *
 * @example
 * // In Vue templates
 * <CIcon icon="cil-user" />
 * <CIcon icon="cib-facebook" />
 * <CIcon icon="cif-us" />
 *
 * @example
 * // Using inject in components
 * import { inject } from 'vue'
 * const icons = inject('icons')
 */

import {
  cibFacebook,
  cibTwitter,
  cibLinkedin,
  cibFlickr,
  cibTumblr,
  cibXing,
  cibGithub,
  cibGoogle,
  cibStackoverflow,
  cibYoutube,
  cibDribbble,
  cibInstagram,
  cibPinterest,
  cibVk,
  cibYahoo,
  cibBehance,
  cibReddit,
  cibVimeo,
  cibCcMastercard,
  cibCcVisa,
  cibCcStripe,
  cibCcPaypal,
  cibCcApplePay,
  cibCcAmex,
} from '@coreui/icons'
import { cifUs, cifBr, cifIn, cifFr, cifEs, cifPl } from '@coreui/icons'
import {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar,
  cilCloudDownload,
  cilChartPie,
  cilCheck,
  cilChevronBottom,
  cilChevronTop,
  cilCheckCircle,
  cilCode,
  cilCommentSquare,
  cilContrast,
  cilCursor,
  cilDrop,
  cilDollar,
  cilEnvelopeClosed,
  cilEnvelopeOpen,
  cilEuro,
  cilExternalLink,
  cilGlobeAlt,
  cilGrid,
  cilFile,
  cilJustifyCenter,
  cilLaptop,
  cilLayers,
  cilLightbulb,
  cilList,
  cilLocationPin,
  cilLockLocked,
  cilMagnifyingGlass,
  cilMediaPlay,
  cilMenu,
  cilMoon,
  cilNotes,
  cilOptions,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilShieldAlt,
  cilSpeech,
  cilSpeedometer,
  cilStar,
  cilSun,
  cilTask,
  cilUser,
  cilUserFemale,
  cilUserFollow,
  cilXCircle,
} from '@coreui/icons'

/**
 * Combined icon set object
 *
 * Merges all icon categories into a single object for global access.
 * This set is provided to all components via Vue's provide/inject API.
 *
 * @type {Object}
 * @property {Array} cil* - CoreUI line icons (UI and interface icons)
 * @property {Array} cif* - CoreUI flag icons (country flags)
 * @property {Array} cib* - CoreUI brand icons (company/service logos)
 */
export const iconsSet = Object.assign(
  {},
  {
    cilArrowBottom,
    cilArrowRight,
    cilArrowTop,
    cilBan,
    cilBasket,
    cilBell,
    cilCalculator,
    cilCalendar,
    cilCloudDownload,
    cilChartPie,
    cilCheck,
    cilChevronBottom,
    cilChevronTop,
    cilCheckCircle,
    cilCode,
    cilCommentSquare,
    cilContrast,
    cilCursor,
    cilDrop,
    cilDollar,
    cilEnvelopeClosed,
    cilEnvelopeOpen,
    cilEuro,
    cilExternalLink,
    cilGlobeAlt,
    cilGrid,
    cilFile,
    cilJustifyCenter,
    cilLaptop,
    cilLayers,
    cilLightbulb,
    cilList,
    cilLocationPin,
    cilLockLocked,
    cilMagnifyingGlass,
    cilMediaPlay,
    cilMenu,
    cilMoon,
    cilNotes,
    cilOptions,
    cilPencil,
    cilPeople,
    cilPuzzle,
    cilSettings,
    cilShieldAlt,
    cilSpeech,
    cilSpeedometer,
    cilStar,
    cilSun,
    cilTask,
    cilUser,
    cilUserFemale,
    cilUserFollow,
    cilXCircle,
  },
  {
    cifUs,
    cifBr,
    cifIn,
    cifFr,
    cifEs,
    cifPl,
  },
  {
    cibFacebook,
    cibTwitter,
    cibLinkedin,
    cibFlickr,
    cibTumblr,
    cibXing,
    cibGithub,
    cibGoogle,
    cibStackoverflow,
    cibYoutube,
    cibDribbble,
    cibInstagram,
    cibPinterest,
    cibVk,
    cibYahoo,
    cibBehance,
    cibReddit,
    cibVimeo,
    cibCcMastercard,
    cibCcVisa,
    cibCcStripe,
    cibCcPaypal,
    cibCcApplePay,
    cibCcAmex,
  },
)
