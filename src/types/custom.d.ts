declare module '*.svg' {
    import { FC, SVGProps } from 'react';
    const content: FC<SVGProps<SVGSVGElement>>;
    export default content;
}
declare module "*.module.scss"