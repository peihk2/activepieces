import { createAction, props } from '@ngrx/store';
import {
  FlowRun,
  FlowVersion,
  StepLocationRelativeToParent,
} from '@activepieces/shared';
import { LeftSideBarType, NO_PROPS, RightSideBarType } from '../../../model';

export enum CanvasActionType {
  SET_LEFT_SIDEBAR = '[CANVAS] SET_LEFT_SIDEBAR',
  SET_RIGHT_SIDEBAR = '[CANVAS] SET_RIGHT_BAR',
  DESELECT_STEP = '[CANVAS] DESELECT_STEP',
  SELECT_STEP_BY_NAME = '[CANVAS] SELECT_STEP_BY_NAME',
  SET_DISPLAYED_FLOW_VERSION = '[CANVAS] SET_DISPLAYED_FLOW_VERSION',
  SET_INITIAL = '[CANVAS] SET_INITIAL',
  OPEN_GENERATE_FLOW_COMPONENT = '[CANVAS] OPEN_GENERATE_FLOW_COMPONENT',
  GENERATE_FLOW_SUCCESSFUL = '[CANVAS] GENERATE_FLOW_SUCCESSFUL',
  GENERATE_FLOW = '[CANVAS] GENERATE_FLOW',
  CLOSE_GENERATE_FLOW_COMPONENT = '[CANVAS] CLOSE_GENERATE_FLOW_COMPONENT',
  SET_RUN = '[CANVAS] SET_RUN',
  EXIT_RUN = '[CANVAS] EXIT_RUN',
  SET_ADD_BUTTON_ID = '[CANVAS] SET_ADD_BUTTON_ID',
  CLEAR_ADD_BUTTON_ID = '[CANVAS] CLEAR_ADD_BUTTON_ID',
  VIEW_VERSION = '[CANVAS] VIEW_VERSION',
}

const setInitial = createAction(
  CanvasActionType.SET_INITIAL,
  props<{ displayedFlowVersion: FlowVersion; run?: FlowRun }>()
);
const viewVersion = createAction(
  CanvasActionType.VIEW_VERSION,
  props<{ viewedFlowVersion: FlowVersion }>()
);
const setLeftSidebar = createAction(
  CanvasActionType.SET_LEFT_SIDEBAR,
  props<{ sidebarType: LeftSideBarType }>()
);

const setAddButtonId = createAction(
  CanvasActionType.SET_ADD_BUTTON_ID,
  props<{ id: number }>()
);
const clearAddButtonId = createAction(CanvasActionType.SET_ADD_BUTTON_ID);
const setRightSidebar = createAction(
  CanvasActionType.SET_RIGHT_SIDEBAR,
  props<{
    sidebarType: RightSideBarType;
    props:
      | {
          stepLocationRelativeToParent: StepLocationRelativeToParent;
          stepName: string;
        }
      | typeof NO_PROPS;
    deselectCurrentStep: boolean;
  }>()
);

const selectStepByName = createAction(
  CanvasActionType.SELECT_STEP_BY_NAME,
  props<{ stepName: string }>()
);
const deselectStep = createAction(CanvasActionType.DESELECT_STEP);
const exitRun = createAction(CanvasActionType.EXIT_RUN);

const setRun = createAction(
  CanvasActionType.SET_RUN,
  props<{ run: FlowRun }>()
);

export const canvasActions = {
  setInitial,
  setLeftSidebar,
  setRightSidebar,
  selectStepByName,
  deselectStep,
  setRun,
  exitRun,
  setAddButtonId,
  clearAddButtonId,
  viewVersion,
};
