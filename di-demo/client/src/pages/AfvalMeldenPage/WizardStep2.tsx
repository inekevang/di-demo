import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AfvalMeldenContext from './AfvalMeldenContext';
import { ButtonStyleProps } from '../../shared/components/Button/ButtonStyle';
import Button from '../../shared/components/Button/Button';
import { createIrmaSession } from '../../services/di';

const loginButtonPosition: ButtonStyleProps = {
  width: 271,
  height: 61,
  top: 371,
  left: 17,
};

// ams loginButtonPosition
// width: 224,
// height: 61,
// top: 364,
// left: 17,

const detailButtonPosition: ButtonStyleProps = {
  width: 348,
  height: 37,
  top: 290,
  left: 6,
};

// ams detailButtonPosition
// width: 348,
// height: 37,
// top: 272,
// left: 6,

const homeButtonPosition: ButtonStyleProps = {
  width: 360,
  height: 112,
  top: 0,
  left: 0,
};

const WizardStep2: React.FC = () => {
  const { theme } = useParams();
  const { step, gotoStep } = useContext(AfvalMeldenContext);
  const [sending, setSending] = useState(false);
  const send = async (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setSending(true);
  };

  useEffect(() => {
    if (sending) {
      (async () => {
        await createIrmaSession('email', 'irma-qr');
        setSending(false);
        gotoStep(null, 4);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sending]);

  return step === 2 ? (
    <>
      <img
        alt="Rommel Melden"
        src={`/assets/theme/${theme}/rommelmelden-step2.png`}
        height="950" // ams: 1009
        width="360"
        decoding="async"
      />
      <Button onClick={e => gotoStep(e, 1)} {...homeButtonPosition} />
      <Button onClick={e => gotoStep(e, 3)} {...detailButtonPosition} />
      <Button onClick={send} {...loginButtonPosition} />
      {sending && <div id="irma-qr" />}
    </>
  ) : null;
};

export default WizardStep2;
