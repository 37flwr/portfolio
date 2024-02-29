import { IconInterface } from './Icon.interface'
import { IconFactory } from './IconFactory'

/* System tray icons */
import soundIcon from '@shared/assets/icons/sound.svg'
import securityIcon from '@shared/assets/icons/security.svg'
import securityIconWarning from '@shared/assets/icons/security-warning.svg'
import securityIconError from '@shared/assets/icons/security-error.svg'

/* Close window buttons */
import closeButtonActive from '@shared/assets/icons/close-button-active.svg'
import closeButtonHover from '@shared/assets/icons/close-button-hover.svg'
import closeButtonStale from '@shared/assets/icons/close-button.svg'

/* Shrink window buttons */
import shrinkWindowActive from '@shared/assets/icons/shrink-active.svg'
import shrinkWindowHover from '@shared/assets/icons/shrink-hover.svg'
import shrinkWindowStale from '@shared/assets/icons/shrink.svg'

/* Expand window buttons */
import expandWindowActive from '@shared/assets/icons/maximize-active.svg'
import expandWindowHover from '@shared/assets/icons/maximize-hover.svg'
import expandWindowStale from '@shared/assets/icons/maximize.svg'

/* Minimize window buttons */
import minimizeWindowActive from '@shared/assets/icons/minimize-active.svg'
import minimizeWindowHover from '@shared/assets/icons/minimize-hover.svg'
import minimizeWindowStale from '@shared/assets/icons/minimize.svg'

/* Start menu buttons */
import startMenuActive from '@shared/assets/icons/start-button-active.svg'
import startMenuHover from '@shared/assets/icons/start-button-hover.svg'
import startMenuStale from '@shared/assets/icons/start-button.svg'

/* Dropdown icons */
import dropdownIconActive from '@shared/assets/icons/dropdown-active.svg'
import dropdownIconHover from '@shared/assets/icons/dropdown-hover.svg'
import dropdownIconStale from '@shared/assets/icons/dropdown.svg'

/* Action icons */
import goForwardIcon from '@shared/assets/icons/go-forward.png'
import goBackwardIcon from '@shared/assets/icons/go-backward.png'

/* Folder icons */
import folderIcon from '@shared/assets/icons/folder.svg'
import folderDownloadsIcon from '@shared/assets/icons/folder-downloads.png'
import folderProgramsIcon from '@shared/assets/icons/folder-programs.png'

/* Utility icons */
import searchIcon from '@shared/assets/icons/search.png'
import saveIcon from '@shared/assets/icons/save-icon.png'
import pullupIcon from '@shared/assets/icons/pullup-icon.png'
import mediaEjectIcon from '@shared/assets/icons/media-eject.svg'
import dialogOkIcon from '@shared/assets/icons/dialog-ok.png'

/* Mimetypes */
import mimetypeUnknown from '@shared/assets/icons/mimetype-unknown.svg'
import mimetypePdf from '@shared/assets/icons/mimetype-pdf.svg'
import mimetypeSecret from '@shared/assets/icons/mimetype-secret.svg'

const renderIconComponent =
    (src: string) =>
    ({ className }: IconInterface) => (
        <IconFactory src={src} className={className} />
    )

const Icons = {
    Sound: renderIconComponent(soundIcon),
    CloseWindow: {
        Active: renderIconComponent(closeButtonActive),
        Hover: renderIconComponent(closeButtonHover),
        Stale: renderIconComponent(closeButtonStale),
    },
    ShrinkWindow: {
        Active: renderIconComponent(shrinkWindowActive),
        Hover: renderIconComponent(shrinkWindowHover),
        Stale: renderIconComponent(shrinkWindowStale),
    },
    ExpandWindow: {
        Active: renderIconComponent(expandWindowActive),
        Hover: renderIconComponent(expandWindowHover),
        Stale: renderIconComponent(expandWindowStale),
    },
    MinimizeWindow: {
        Active: renderIconComponent(minimizeWindowActive),
        Hover: renderIconComponent(minimizeWindowHover),
        Stale: renderIconComponent(minimizeWindowStale),
    },
    StartMenu: {
        Active: renderIconComponent(startMenuActive),
        Hover: renderIconComponent(startMenuHover),
        Stale: renderIconComponent(startMenuStale),
    },
    Security: {
        Base: renderIconComponent(securityIcon),
        Warning: renderIconComponent(securityIconWarning),
        Error: renderIconComponent(securityIconError),
    },
    Search: renderIconComponent(searchIcon),
    Save: renderIconComponent(saveIcon),
    Pullup: renderIconComponent(pullupIcon),
    MediaEject: renderIconComponent(mediaEjectIcon),
    Forward: renderIconComponent(goForwardIcon),
    Backward: renderIconComponent(goBackwardIcon),
    Dropdown: {
        Active: renderIconComponent(dropdownIconActive),
        Hover: renderIconComponent(dropdownIconHover),
        Stale: renderIconComponent(dropdownIconStale),
    },
    DialogOk: renderIconComponent(dialogOkIcon),
    Folder: {
        Base: renderIconComponent(folderIcon),
        Downloads: renderIconComponent(folderDownloadsIcon),
        Programs: renderIconComponent(folderProgramsIcon),
    },
    Mimetype: {
        Unknown: renderIconComponent(mimetypeUnknown),
        Pdf: renderIconComponent(mimetypePdf),
        Secret: renderIconComponent(mimetypeSecret),
    },
}

export default Icons
