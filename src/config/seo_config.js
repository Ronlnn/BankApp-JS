const SITE_NAME = 'RonInn Bank - Vanilla JS';
export const getTitle = (title) => {
    return title ? `${title} | ${SITE_NAME}` : SITE_NAME;
};
