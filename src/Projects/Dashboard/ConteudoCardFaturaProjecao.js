import React from 'react';
import LinhaResumo from "./LinhaResumo";

const ConteudoCardFaturaProjecao = ({ resumoProjecaoFaturas }) => (
  <>
    <h5>Projeção <small>(Trimestre)</small></h5>
    <hr/>
    <LinhaResumo
        key="Rascunho"
        label="Rascunho"
        total={ resumoProjecaoFaturas?.rascunho?.total }
        concluidos={ resumoProjecaoFaturas?.rascunho?.concluido }
    />
    <LinhaResumo
        key="Não Enviados"
        label="Não Enviados"
        total={ resumoProjecaoFaturas?.naoEnviado?.total }
        concluidos={ resumoProjecaoFaturas?.naoEnviado?.concluido }
    />
    <LinhaResumo
        key="Não Recebidos"
        label="Não Recebidos"
        total={ resumoProjecaoFaturas?.naoFaturado?.total }
        concluidos={ resumoProjecaoFaturas?.naoFaturado?.concluido }
        variant="danger"
    />
    <LinhaResumo
        key="Faturado Parcialmente"
        label="Faturado Parcialmente"
        total={ resumoProjecaoFaturas?.faturadoParcialmente?.total }
        concluidos={ resumoProjecaoFaturas?.faturadoParcialmente?.concluido }
        variant="warning"
    />
    <LinhaResumo
        key="Atrasados"
        label="Atrasados"
        total={ resumoProjecaoFaturas?.atrasado?.total }
        concluidos={ resumoProjecaoFaturas?.atrasado?.concluido }
        variant="warning"
    />
    <LinhaResumo
        key="Faturados"
        label="Faturados"
        total={ resumoProjecaoFaturas?.pago?.total }
        concluidos={ resumoProjecaoFaturas?.pago?.concluido }
        variant="success"
    />
  </>
);

export default ConteudoCardFaturaProjecao;