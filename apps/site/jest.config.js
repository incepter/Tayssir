module.exports = {
  name: 'site',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/site',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
