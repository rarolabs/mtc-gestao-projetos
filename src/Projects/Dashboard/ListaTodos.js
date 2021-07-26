import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ListaTodos = ({ todos, onComplete }) => {
    return (
        <Row>
            <Col>
                <div className="new-task">
                    {
                        todos.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="to-do-list mb-3">
                                        <div className="d-inline-block">
                                            <label className={[item.complete ? 'done-task' : '', 'check-task custom-control custom-checkbox d-flex justify-content-center'].join(' ')} >
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked={item.complete} onChange={() => onComplete(index)} />
                                                    <span className="custom-control-label">{item.note}</span>
                                            </label>
                                        </div>
                                        <div className="float-right"><a href="#!" className="delete_todolist"><i className="fa fa-trash-alt"/></a></div>
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