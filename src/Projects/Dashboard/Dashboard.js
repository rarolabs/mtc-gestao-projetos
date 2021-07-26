import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Alert, } from 'react-bootstrap';

import ListaTodos from "./ListaTodos";
import axiosInstance from '../../store/utils/api-client';
import { EMPTY_LINK, formatCurrency } from './utils';
import UserReview from './UserReview';
import ConteudoCardProposta from './ConteudoCardPropostas';
import ConteudoCardFatura from './ConteudoCardFatura';
import ConteudoCardFaturaProjecao from './ConteudoCardFaturaProjecao';

const Dashboard = () => {
    const [tarefas, setTarefas] = useState([]);
    const [resumoFaturas, setResumoFaturas] = useState({});
    const [resumoProjecaoFaturas, setResumoProjecaoFaturas] = useState({});
    const [resumoPropostas, setResumoPropostas] = useState({});
    const [avaliacoes, setAvaliacoes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const tarefasResponse = await axiosInstance.get('/tarefas');
            const resumoFaturasResponse = await axiosInstance.get('/faturas/overview');
            const resumoProjecaoFaturasResponse = await axiosInstance.get('/faturas/projecao/overview');
            const resumoPropostasResponse = await axiosInstance.get('/propostas/overview');
            const avaliacoesResponse = await axiosInstance.get('/avaliacoes');

            setTarefas(tarefasResponse.data);
            setResumoFaturas(resumoFaturasResponse.data);
            setResumoProjecaoFaturas(resumoProjecaoFaturasResponse.data);
            setResumoPropostas(resumoPropostasResponse.data);
            setAvaliacoes(avaliacoesResponse.data);
        };
        getData();
    }, []);

    return (
        <Row>
            <Col md={8}>
                <Card className="statustic-progress-card">
                    <Card.Body>
                        <Row>
                            <Col md={6} lg={4} sm={6}>
                                <ConteudoCardProposta resumoPropostas={resumoPropostas} />
                            </Col>
                            <Col md={6} lg={4} sm={6} className="mt-md-0 mt-3">
                                <ConteudoCardFatura resumoFaturas={resumoFaturas} />
                            </Col>
                            <Col md={12} sm={6} lg={4} className="mt-md-0 mt-3">
                                <ConteudoCardFaturaProjecao resumoProjecaoFaturas={resumoProjecaoFaturas} />
                            </Col>
                        </Row>
                        <Row className="mt-3 text-center">
                            <Col lg={4} xs={12} md={12}>
                                <Alert variant='success' className="mb-0">
                                    <h3 className="alert-heading">{ formatCurrency(resumoFaturas.valorFaturasPagas) }</h3>
                                    <span className="">Faturas Pagas</span>
                                </Alert>
                            </Col>
                            <Col lg={4} xs={12} md={12} className="mt-md-0 mt-3">
                                <Alert variant='danger' className="mb-0">
                                    <h3 className="alert-heading">{ formatCurrency(resumoFaturas.valorFaturasPendentes) }</h3>
                                    <span className="">Faturas Pendentes</span>
                                </Alert>
                            </Col>
                            <Col lg={4} xs={12} md={12} className="mt-md-0 mt-3">
                                <Alert variant='danger' className="mb-0">
                                    <h3 className="alert-heading">{ formatCurrency(resumoFaturas.valorFaturasAtrasadas) }</h3>
                                    <span className="">Faturas Atrasadas</span>
                                </Alert>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="table-card review-card">
                    <Card.Header>
                        <h5>Avaliações</h5>
                    </Card.Header>
                    <Card.Body>
                        <div className="review-block">
                            { avaliacoes.slice(0, 4).map(avaliacao => <UserReview key={avaliacao.id} review={avaliacao} />) }
                        </div>
                        <div className="text-right  m-r-20">
                            <a href={EMPTY_LINK} className="b-b-primary text-primary">View all Customer Reviews</a>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Header>
                        <Card.Title as='h5'>Minhas Tarefas</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ListaTodos
                            todos={tarefas.slice(0, 10)}
                            onComplete={index => {
                                tarefas[index].complete = !tarefas[index].complete;
                                setTarefas([...tarefas]);
                            }}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Dashboard;