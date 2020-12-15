import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortableContainer, SortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import FeatherIcon from 'feather-icons-react';
import { Row, Col } from 'antd';
import { NoteCardWrap } from '../style';
import NoteCard from '../../../components/note/Card';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { noteDragData } from '../../../redux/note/actionCreator';

const DragHandle = sortableHandle(() => <FeatherIcon icon="move" size={16} />);

const SortableItem = SortableElement(({ value }) => (
  <Col xxl={8} xl={12} lg={12} sm={12} xs={24} key={value.key}>
    <NoteCard Dragger={DragHandle} data={value} />
  </Col>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <Row gutter={24}>
      {items
        .filter(item => item.stared)
        .map((value, index) => (
          <SortableItem key={`item-${value.key}`} index={index} value={value} />
        ))}
    </Row>
  );
});

const Favorite = () => {
  const dispatch = useDispatch();
  const { noteData } = useSelector(state => {
    return {
      noteData: state.Note.data,
    };
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(
      noteDragData(
        arrayMove(
          [...noteData.filter(item => item.stared), ...noteData.filter(item => !item.stared)],
          oldIndex,
          newIndex,
        ),
      ),
    );
  };

  return (
    <Cards title="Favorite">
      <NoteCardWrap>
        <SortableList useDragHandle axis="xy" items={noteData} onSortEnd={onSortEnd} />
      </NoteCardWrap>
    </Cards>
  );
};

export default Favorite;
