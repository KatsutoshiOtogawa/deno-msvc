
// [wind](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messagebox)
// 

/// To indicate the buttons displayed in the message box, specify one of the following values.

/**
 * The message box contains three push buttons: Abort, Retry, and Ignore.
 */
const MB_ABORTRETRYIGNORE = 0x00000002;

/**
 * The message box contains three push buttons: Cancel, Try Again, Continue. Use this message box type instead of MB_ABORTRETRYIGNORE.
 */
const MB_CANCELTRYCONTINUE = 0x00000006;

/**
 * Adds a Help button to the message box. When the user clicks the Help button or presses F1, the system sends a WM_HELP message to the owner.
 */
const MB_HELP = 0x00004000;


/**
 * The message box contains one push button: OK. This is the default.
 */
const MB_OK = 0x00000000;

/**
 * The message box contains two push buttons: OK and Cancel.
 */
const MB_OKCANCEL = 0x00000001;

/**
 * The message box contains two push buttons: Retry and Cancel.
 */
const MB_RETRYCANCEL = 0x00000005;

/**
 * The message box contains two push buttons: Yes and No.
 */
const MB_YESNO = 0x00000004;

/**
 * The message box contains three push buttons: Yes, No, and Cancel.
 */
const MB_YESNOCANCEL = 0x00000003;

/// To display an icon in the message box, specify one of the following values.

/**
 * An exclamation-point icon appears in the message box.
 */
const MB_ICONEXCLAMATION = 0x00000030;

/**
 * An exclamation-point icon appears in the message box.
 */
const MB_ICONWARNING = 0x00000030;


/**
 * An icon consisting of a lowercase letter i in a circle appears in the message box.
 */
const MB_ICONINFORMATION = 0x00000040;

/**
 * An icon consisting of a lowercase letter i in a circle appears in the message box.
 */
const MB_ICONASTERISK = 0x00000040;

/**
 * A question-mark icon appears in the message box. The question-mark message icon is no longer recommended because it does not clearly represent a specific type of message and because the phrasing of a message as a question could apply to any message type. In addition, users can confuse the message symbol question mark with Help information. Therefore, do not use this question mark message symbol in your message boxes. The system continues to support its inclusion only for backward compatibility.
 */
const MB_ICONQUESTION = 0x00000020;

/**
 * A stop-sign icon appears in the message box.
 */
const MB_ICONSTOP = 0x00000010;

/**
 * A stop-sign icon appears in the message box.
 */
const MB_ICONERROR = 0x00000010;

/**
 * A stop-sign icon appears in the message box.
 */
const MB_ICONHAND = 0x00000010;

/// To indicate the default button, specify one of the following values.

/**
 * The first button is the default button.
 * MB_DEFBUTTON1 is the default unless MB_DEFBUTTON2, MB_DEFBUTTON3, or MB_DEFBUTTON4 is specified.
 */
const MB_DEFBUTTON1 = 0x00000000;


/**
 * The second button is the default button.
 */
const MB_DEFBUTTON2 = 0x00000100;


/**
 * The third button is the default button.
 */
const MB_DEFBUTTON3 = 0x00000200;

/**
 * The fourth button is the default button.
 */
const MB_DEFBUTTON4 = 0x00000300;

/// To indicate the modality of the dialog box, specify one of the following values.

/**
 * The user must respond to the message box before continuing work in the window identified by the hWnd parameter. However, the user can move to the windows of other threads and work in those windows.
 * Depending on the hierarchy of windows in the application, the user may be able to move to other windows within the thread. All child windows of the parent of the message box are automatically disabled, but pop-up windows are not.
 * 
 * MB_APPLMODAL is the default if neither MB_SYSTEMMODAL nor MB_TASKMODAL is specified.
 */
const MB_APPLMODAL = 0x00000000;

/**
 * Same as MB_APPLMODAL except that the message box has the WS_EX_TOPMOST style. Use system-modal message boxes to notify the user of serious, potentially damaging errors that require immediate attention (for example, running out of memory). This flag has no effect on the user's ability to interact with windows other than those associated with hWnd.
 */
const MB_SYSTEMMODAL = 0x00001000;

/**
 * Same as MB_APPLMODAL except that all the top-level windows belonging to the current thread are disabled if the hWnd parameter is NULL. Use this flag when the calling application or library does not have a window handle available but still needs to prevent input to other windows in the calling thread without suspending other threads.
 */
const MB_TASKMODAL = 0x00002000;

/// To specify other options, use one or more of the following values.

/**
 * Same as desktop of the interactive window station. For more information, see Window Stations.
 * If the current input desktop is not the default desktop, MessageBox does not return until the user switches to the default desktop.
 */
const MB_DEFAULT_DESKTOP_ONLY = 0x00020000;


/**
 * The text is right-justified.
 */
const MB_RIGHT = 0x00080000;


/**
 * Displays message and caption text using right-to-left reading order on Hebrew and Arabic systems.
 */
const MB_RTLREADING = 0x00100000;

/**
 * The message box becomes the foreground window. Internally, the system calls the SetForegroundWindow function for the message box.
 */
const MB_SETFOREGROUND = 0x00010000;

/**
 * The message box is created with the WS_EX_TOPMOST window style.
 */
const MB_TOPMOST = 0x00040000;

/**
 * The caller is a service notifying the user of an event. The function displays a message box on the current active desktop, even if there is no user logged on to the computer.
 * Terminal Services: If the calling thread has an impersonation token, the function directs the message box to the session specified in the impersonation token.
 * 
 * If this flag is set, the hWnd parameter must be NULL. This is so that the message box can appear on a desktop other than the desktop corresponding to the hWnd.
 * 
 * For information on security considerations in regard to using this flag, see Interactive Services. In particular, be aware that this flag can produce interactive content on a locked desktop and should therefore be used for only a very limited set of scenarios, such as resource exhaustion.
 */
const MB_SERVICE_NOTIFICATION = 0x00200000;


/// Return value

/**
 * The Abort button was selected.
 */
const IDABORT = 3;

/**
 * The Cancel button was selected.
 */
const IDCANCEL = 2;

/**
 * The Continue button was selected.
 */
const IDCONTINUE = 11;

/**
 * The Ignore button was selected.
 */
const IDIGNORE = 5;

/**
 * The No button was selected.
 */
const IDNO = 7;

/**
 * The OK button was selected.
 */
const IDOK = 1;

/**
 * The Retry button was selected.
 */
const IDRETRY = 4;

/**
 * The Try Again button was selected.
 */
const IDTRYAGAIN = 10;

/**
 * The Yes button was selected.
 */
const IDYES = 6;

// type guard付きで後で書く。
// type MessageBoxExReturnValue = [

// ]

export {
/// To indicate the buttons displayed in the message box, specify one of the following values.
  MB_ABORTRETRYIGNORE,
  MB_CANCELTRYCONTINUE,
  MB_HELP,
  MB_OK,
  MB_OKCANCEL,
  MB_RETRYCANCEL,
  MB_YESNO,
  MB_YESNOCANCEL,

/// To display an icon in the message box, specify one of the following values.
  MB_ICONEXCLAMATION,
  MB_ICONWARNING,
  MB_ICONINFORMATION,
  MB_ICONASTERISK,
  MB_ICONQUESTION,
  MB_ICONSTOP,
  MB_ICONERROR,
  MB_ICONHAND,
/// To indicate the default button, specify one of the following values.
  MB_DEFBUTTON1,
  MB_DEFBUTTON2,
  MB_DEFBUTTON3,
  MB_DEFBUTTON4,

/// To indicate the modality of the dialog box, specify one of the following values.
  MB_APPLMODAL,
  MB_SYSTEMMODAL,
  MB_TASKMODAL,

/// To specify other options, use one or more of the following values.
  MB_DEFAULT_DESKTOP_ONLY,
  MB_RIGHT,
  MB_RTLREADING,
  MB_SETFOREGROUND,
  MB_TOPMOST,
  MB_SERVICE_NOTIFICATION,

/// Return value
  IDABORT,
  IDCANCEL,
  IDCONTINUE,
  IDIGNORE,
  IDNO,
  IDOK,
  IDRETRY,
  IDTRYAGAIN,
  IDYES
}
