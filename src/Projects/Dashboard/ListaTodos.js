import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ListaTodos = ({ todos, onComplete, onDeleteTodo }) => {
    return (
        <Row>
            <Col>
                <div className="new-task">
                    {
                        todos.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <div className="to-do-list mb-3">
                                        <div className="d-inline-block">
                                            <label className={[item.complete ? 'done-task' : '', 'check-task custom-control custom-checkbox d-flex justify-content-center'].join(' ')} >
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    defaultChecked={item.complete}
                                                    onChange={() => onComplete(index)}
                                                />
                                                <span className="custom-control-label">{item.note}</span>
                                            </label>
                                        </div>
                                        <div className="float-right">
                                            <a href="#!" className="delete_todolist" onClick={() => onDeleteTodo(item, index)}>
                                                <i className="fa fa-trash-alt"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Col>
        </Row>
    );
}

export default ListaTodos;