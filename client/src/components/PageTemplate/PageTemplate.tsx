import React from 'react';
import { Row } from '@datapunt/asc-ui';
import VerticalColumn from '@components/VerticalColumn/VerticalColumn';

interface IProps {
    className?: string;
}

const PageTemplate: React.FC<IProps> = ({ children, className }) => (
    <Row className={className}>
        <VerticalColumn span={12}>{children}</VerticalColumn>
    </Row>
);

export default PageTemplate;