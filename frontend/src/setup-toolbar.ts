import type { FUniver } from '@univerjs/presets'

import {
  setupClearStyles,
  setupCommandsListenerSwitch,
  setupCreateSheet,
  setupEditSwitch,
  setupGetA1CellData,
  setupGetSheetData,
  setupGetValue,
  setupGetWorkbookData,
  setupRedo,
  setupScrollToBottom,
  setupScrollToCell,
  setupScrollToTop,
  setupSetBackground,
  setupSetSelection,
  setupSetValue,
  setupSetValues,
  setupUndo,
  setupVersion,
} from './api'

export function setupToolbar(univerAPI: FUniver,container:HTMLElement) {
  const $toolbar = container

  setupSetValue($toolbar, univerAPI)
  setupSetValues($toolbar, univerAPI)
  setupGetValue($toolbar, univerAPI)
  setupGetA1CellData($toolbar, univerAPI)

  setupGetWorkbookData($toolbar, univerAPI)
  setupGetSheetData($toolbar, univerAPI)
  setupCreateSheet($toolbar, univerAPI)

  setupScrollToCell($toolbar, univerAPI)
  setupScrollToTop($toolbar, univerAPI)
  setupScrollToBottom($toolbar, univerAPI)

  setupSetBackground($toolbar, univerAPI)

  setupCommandsListenerSwitch($toolbar, univerAPI)
  setupEditSwitch($toolbar, univerAPI)

  setupUndo($toolbar, univerAPI)
  setupRedo($toolbar, univerAPI)

  setupSetSelection($toolbar, univerAPI)
  setupClearStyles($toolbar, univerAPI)

  setupVersion($toolbar)
}
