import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../../store/reducers';
import { createTask } from '../../../store/actions/create-task';
import { createList } from '../../../store/actions/create-list';
import { getAvailableLists } from '../../../store/reducers/domain/lists/selectors';
import { ListType } from '../../../store/reducers/domain/lists';
import { TableWrapper } from '../../components/table-wrapper';
import { Card } from '../../components/card';
import List from '../list';
import { TaskCreator } from '../../components/task-creator';

import styles from './styles.module.css';

type ActionsMap = {
  createTask: typeof createTask,
  createList: typeof createList
}

export interface IStateProps {
  lists: Array<ListType>;
}

export interface IDispatchProps {
  actions: ActionsMap;
}

type IPropsComponents = IStateProps & IDispatchProps;

class Board extends React.PureComponent<IPropsComponents, {}> {
  public render(): JSX.Element {
    return (
        <div className={styles.board}>
          <TableWrapper elements={this.renderLists()}/>
        </div>
    );
  }

  private renderLists(): Array<JSX.Element> {
    const { lists, actions } = this.props;
    return lists.map(list => (
        <Card title={list.title}>
          <List listId={list.id}/>
          <TaskCreator createTask={(text) => actions.createTask(text, list.id)}/>
        </Card>
    ));
  }
}

const mapStateToProps = (state: State): IStateProps => {
  return {
    lists: getAvailableLists(state)
  };
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  actions: bindActionCreators({
    createTask,
    createList
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
