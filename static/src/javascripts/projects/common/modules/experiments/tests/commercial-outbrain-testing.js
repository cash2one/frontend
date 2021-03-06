// @flow

export const commercialOutbrainTesting: ABTest = {
    id: 'CommercialOutbrainTesting',
    start: '2019-03-12',
    expiry: '2020-04-22',
    author: 'Frankie Hammond',
    description:
        '0% participation development switch AB test for testing Outbrain',
    audience: 0,
    audienceOffset: 0,
    successMeasure: 'Outbrain widget testing',
    audienceCriteria: 'internal',
    dataLinkNames: '',
    idealOutcome: 'Outbrain can be tested for different widget designs',
    canRun: () => true,
    variants: [
        {
            id: 'variant',
            test: (): void => {},
        },
    ],
};
