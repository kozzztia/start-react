import React from "react";
import Box from './box.svg';
import Cat from './cat.svg';
import CatString from './catString.svg';
import JarCoin from './jarCoin.svg';
import Laptop from './laptop.svg';
import Safe from './safe.svg';
import SafeCoin from './safeCoin.svg';
import Wallet from './wallet.svg';
import HappyCat from './happyCat.svg';
import Gift from './gift.svg';
import ManyJars from './manyJars.svg';
import Papers from './papers.svg';
import Papers2 from './papers2.svg';
import Screen from './screen.svg';


interface SeparatorSymbol {
    [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

// eslint-disable-next-line import/prefer-default-export
export const images: SeparatorSymbol = {
    Box,
    Cat,
    CatString,
    JarCoin,
    Laptop,
    Safe,
    SafeCoin,
    Wallet,
    HappyCat,
    Gift,
    ManyJars,
    Papers,
    Papers2,
    Screen,
};