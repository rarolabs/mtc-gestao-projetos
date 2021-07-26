import React from 'react';
import LinhaResumo from "./LinhaResumo";

const ConteudoCardProposta = ({ resumoPropostas }) => (
  <>
    <h5>Propostas</h5>
    <hr/>
    <LinhaResumo
        key="Rascunho"
        label="Rascunho"
        total={ resumoPropostas?.rascunho?.total }
        concluidos={ resumoPropostas?.rascunho?.concluido }
    />
    <LinhaResumo
        key="Não Enviadas"
        label="Não Enviadas"
        total={ resumoPropostas?.naoEnviado?.total }
        concluidos={ resumoPropostas?.naoEnviado?.concluido }
    />
    <LinhaResumo
        key="Enviadas"
        label="Enviadas"
        total={ resumoPropostas?.enviado?.total }
        concluidos={ resumoPropostas?.enviado?.concluido }
        variant="primary"
    />
    <LinhaResumo
        key="Revisadas"
        label="Revisadas"
        total={ resumoPropostas?.revisado?.total }
        concluidos={ resumoPropostas?.revisado?.concluido }
        variant="warning"
    />
    <LinhaResumo
        key="Recusadas"
        label="Recusadas"
        total={ resumoPropostas?.recusado?.total }
        concluidos={ resumoPropostas?.recusado?.concluido }
        variant="danger"
    />
    <LinhaResumo
        key="Aprovadas"
        label="Aprovadas"
        total={ resumoPropostas?.aprovado?.total }
        concluidos={ resumoPropostas?.aprovado?.concluido }
        variant="success"
    />
  </>
);

export default ConteudoCardProposta;