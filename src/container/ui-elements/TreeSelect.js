import React, { useState } from 'react';
import { Row, Col, TreeSelect } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { TreeNode, SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

const TreeSelects = () => {
  const [state, setState] = useState({
    value: undefined,
    async_value: undefined,
    multi_value: undefined,
    generate_value: undefined,
    check_value: ['0-0-0'],
    asyncTreeData: [
      { id: 1, pId: 0, value: '1', title: 'Expand to load' },
      { id: 2, pId: 0, value: '2', title: 'Expand to load' },
      { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
    ],
  });

  const onChange = value => {
    setState({ ...state, value });
  };

  const onMultiChange = value => {
    setState({ ...state, multi_value: value });
  };

  const onGenerateChange = value => {
    setState({ ...state, generate_value: value });
  };

  const onCheckChange = value => {
    setState({ ...state, check_value: value });
  };

  const tProps = {
    treeData,
    value: state.check_value,
    onChange: onCheckChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };

  const genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random()
      .toString(36)
      .substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };

  const onLoadData = treeNode =>
    new Promise(resolve => {
      const { id } = treeNode.props;
      setTimeout(() => {
        setState({
          ...state,
          asyncTreeData: state.asyncTreeData.concat([genTreeNode(id, false), genTreeNode(id, true)]),
        });
        resolve();
      }, 300);
    });

  const onAsyncChange = value => {
    setState({ ...state, async_value: value });
  };
  const { asyncTreeData } = state;

  return (
    <>
      <PageHeader
        title="TreeSelect"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <Cards title="Basic">
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
              >
                <TreeNode value="parent 1" title="parent 1">
                  <TreeNode value="parent 1-0" title="parent 1-0">
                    <TreeNode value="leaf1" title="my leaf" />
                    <TreeNode value="leaf2" title="your leaf" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1">
                    <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Multiple Selection">
              <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={state.multi_value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                multiple
                treeDefaultExpandAll
                onChange={onMultiChange}
              >
                <TreeNode value="parent 1" title="parent 1">
                  <TreeNode value="parent 1-0" title="parent 1-0">
                    <TreeNode value="leaf1" title="my leaf" />
                    <TreeNode value="leaf2" title="your leaf" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1">
                    <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Generate from tree data">
              <TreeSelect
                style={{ width: '100%' }}
                value={state.generate_value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={onGenerateChange}
              />
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Checkable">
              <TreeSelect {...tProps} />
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Asynchronous loading">
              <TreeSelect
                treeDataSimpleMode
                style={{ width: '100%' }}
                value={state.async_value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                onChange={onAsyncChange}
                loadData={onLoadData}
                treeData={asyncTreeData}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default TreeSelects;
