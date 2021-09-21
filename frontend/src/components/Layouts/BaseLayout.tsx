import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';
import { AppBar } from './AppBar';

interface Props {
    children: ReactNode;
}

export const BaseLayout = (props: Props) => {
    return (
        <Box>
            <AppBar />

            <Box pt={'85px'}>
                {props.children}
            </Box>
        </Box>
    );
};
