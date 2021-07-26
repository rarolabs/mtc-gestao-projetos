import React from 'react';
import LinhaResumo from "./LinhaResumo";

const ConteudoCardFatura = ({ resumoFaturas }) => (
  <>
    <h5>Faturas</h5>
    <hr/>
    <LinhaResumo
        key="Rascunho"
        label="Rascunho"
        total={ resumoFaturas?.rascunho?.total }
        concluidos={ resumoFaturas?.rascunho?.concluido }
    />
    <LinhaResumo
        key="Não Enviados"
        label="Não Enviados"
        total={ resumoFaturas?.naoEnviado?.total }
        concluidos={ resumoFaturas?.naoEnviado?.concluido }
    />
    <LinhaResumo
        key="Não Recebidos"
        label="Não Recebidos"
        total={ resumoFaturas?.naoFaturado?.total }
        concluidos={ resumoFaturas?.naoFaturado?.concluido }
        variant="danger"
    />
    <LinhaResumo
        key="Faturado Parcialmente"
        label="Faturado Parcialmente"
        total={ resumoFaturas?.faturadoParcialmente?.total }
        concluidos={ resumoFaturas?.faturadoParcialmente?.concluido }
        variant="warning"
    />
    <LinhaResumo
        key="Atrasados"
        label="Atrasados"
        total={ resumoFaturas?.atrasado?.total }
        concluidos={ resumoFaturas?.atrasado?.concluido }
        variant="warning"
    />
    <LinhaResumo
        key="Faturados"
        label="Faturados"
        total={ resumoFaturas?.pago?.total }
        concluidos={ resumoFaturas?.pago?.concluido }
        variant="success"
    />
  </>
);

export default ConteudoCardFatura;