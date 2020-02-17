module.exports = {
  name: 'ui-new',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-new',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
