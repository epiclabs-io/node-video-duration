const { expect } = require('chai');

const getVideoDuration = require('..');

const testUrl = 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4';
const testUrlDuration = 634;

describe('Get Duration of a video', function () {
    it('should return duration', function () {
        return getVideoDuration(testUrl)
            .then(d => expect(d).to.be.closeTo(testUrlDuration, 2.0));
    });
});

describe('Remote video doesn\'t exist', function () {
    it('should go for the catch method of the promise', function () {
        return getVideoDuration('/this/video/file/shouldnt/exist.mp4')
            .then(function(m) { throw new Error('bad if we are here'); })
            .catch(e => expect(e).to.equal('Not valid inout file or ffprobe not installed'));
    });
});