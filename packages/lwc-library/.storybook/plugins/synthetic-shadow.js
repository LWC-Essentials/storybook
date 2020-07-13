const SYNTHETIC_IMPORT = 'import "@lwc/synthetic-shadow";';

export default function syntheticShadow() {
    let input;
    return {
        name: 'synthetic-shadow',
        options(rollupOpts) {
            input = rollupOpts.input;
        },
        transform(src, id) {
            if (id === input) {
                src = SYNTHETIC_IMPORT + src;
            }
            return { code: src, map: null };
        }
    };
};
