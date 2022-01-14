/* eslint-env mocha */
/* global assert, module, self */

'use strict';

(function ()
{
    function init()
    {
        describe
        (
            'numberName',
            function ()
            {
                it
                (
                    'is set up correctly',
                    function ()
                    {
                        var self = { };
                        numberName.debug.setUp(self);
                        assert.strictEqual(self.numberName, numberName);
                    }
                );
                it
                (
                    'has no enumerable properties',
                    function ()
                    {
                        assert.deepEqual(Object.keys(numberName), []);
                    }
                );
                it
                (
                    'has no enumerable debug properties',
                    function ()
                    {
                        assert.deepEqual(numberName.debug, { });
                    }
                );
                it
                (
                    'has string representation "numberName"',
                    function ()
                    {
                        assert.equal(numberName.toString(), 'numberName');
                    }
                );
            }
        );

        describe
        (
            'numberName names correctly',
            function ()
            {
                function test(number, expectedName, description)
                {
                    it
                    (
                        description || String(number),
                        function ()
                        {
                            var actualName = numberName(number);
                            assert.strictEqual(actualName, expectedName);
                        }
                    );
                }

                test(-42, 'minus forty-two');
                test(-0.1, 'minus zero point one');
                test(-Number.MIN_VALUE, 'zero', '-Number.MIN_VALUE');
                test(-0, 'zero');
                test(0, 'zero');
                test(Number.MIN_VALUE, 'zero', 'Number.MIN_VALUE');
                test(1, 'one');
                test(1.5, 'one point five');
                test(2, 'two');
                test
                (
                    Math.E,
                    'two point seven one eight two eight one eight two eight four five nine zero ' +
                    'five',
                    'Math.E'
                );
                test(3, 'three');
                test
                (
                    Math.PI,
                    'three point one four one five nine two six five three five eight nine seven ' +
                    'nine',
                    'Math.PI'
                );
                test(4, 'four');
                test(5, 'five');
                test(6, 'six');
                test(7, 'seven');
                test(8, 'eight');
                test(9, 'nine');
                test(10, 'ten');
                test(11, 'eleven');
                test(12, 'twelve');
                test(13, 'thirteen');
                test(14, 'fourteen');
                test(15, 'fifteen');
                test(16, 'sixteen');
                test(17, 'seventeen');
                test(18, 'eighteen');
                test(19, 'nineteen');
                test(20, 'twenty');
                test(21, 'twenty-one');
                test(30, 'thirty');
                test(40, 'forty');
                test(50, 'fifty');
                test(60, 'sixty');
                test(70, 'seventy');
                test(80, 'eighty');
                test(90, 'ninety');
                test(100, 'one hundred');
                test(101, 'one hundred one');
                test(1000, 'one thousand');
                test(1000.0001, 'one thousand point zero zero zero one');
                test(1042, 'one thousand forty-two');
                test(1000000, 'one million');
                test(1000000.0000001, 'one million point zero zero zero zero zero zero one');
                test(1e9, 'one billion');
                test(1e12, 'one trillion');
                test
                (
                    1e15 - 1,
                    'nine hundred ninety-nine trillion ' +
                    'nine hundred ninety-nine billion ' +
                    'nine hundred ninety-nine million ' +
                    'nine hundred ninety-nine thousand ' +
                    'nine hundred ninety-nine'
                );
                test(1e15, 'one quadrillion');
                test(1e18, 'one quintillion');
                test(1e21, 'one sextillion');
                test(1e24, 'one septillion');
                test(1e27, 'one octillion');
                test(1e30, 'one nonillion');
                test(1e33, 'one decillion');
                test(1e36, 'one undecillion');
                test(1e39, 'one duodecillion');
                test(1e42, 'one tredecillion');
                test(1e45, 'one quattuordecillion');
                test(1e48, 'one quindecillion');
                test(1e51, 'one sexdecillion');
                test(1e54, 'one septendecillion');
                test(1e57, 'one octodecillion');
                test(1e60, 'one novemdecillion');
                test(1e63, 'one vigintillion');
                test(1e66, 'one unvigintillion');
                test(1e69, 'one duovigintillion');
                test(1e72, 'one trevigintillion');
                test(1e75, 'one quattuorvigintillion');
                test(1e78, 'one quinvigintillion');
                test(1e81, 'one sexvigintillion');
                test(1e84, 'one septenvigintillion');
                test(1e87, 'one octovigintillion');
                test(1e90, 'one novemvigintillion');
                test(1e93, 'one trigintillion');
                test(1e96, 'one untrigintillion');
                test(1e99, 'one duotrigintillion');
                test(1e102, 'one tretrigintillion');
                test(1e105, 'one quattuortrigintillion');
                test(1e108, 'one quintrigintillion');
                test(1e111, 'one sextrigintillion');
                test(1e114, 'one septentrigintillion');
                test(1e117, 'one octotrigintillion');
                test(1e120, 'one novemtrigintillion');
                test(1e123, 'one quadragintillion');
                test(1e126, 'one unquadragintillion');
                test(1e129, 'one duoquadragintillion');
                test(1e132, 'one trequadragintillion');
                test(1e135, 'one quattuorquadragintillion');
                test(1e138, 'one quinquadragintillion');
                test(1e141, 'one sexquadragintillion');
                test(1e144, 'one septenquadragintillion');
                test(1e147, 'one octoquadragintillion');
                test(1e150, 'one novemquadragintillion');
                test(1e153, 'one quinquagintillion');
                test(1e156, 'one unquinquagintillion');
                test(1e159, 'one duoquinquagintillion');
                test(1e162, 'one trequinquagintillion');
                test(1e165, 'one quattuorquinquagintillion');
                test(1e168, 'one quinquinquagintillion');
                test(1e171, 'one sexquinquagintillion');
                test(1e174, 'one septenquinquagintillion');
                test(1e177, 'one octoquinquagintillion');
                test(1e180, 'one novemquinquagintillion');
                test(1e183, 'one sexagintillion');
                test(1e186, 'one unsexagintillion');
                test(1e189, 'one duosexagintillion');
                test(1e192, 'one tresexagintillion');
                test(1e195, 'one quattuorsexagintillion');
                test(1e198, 'one quinsexagintillion');
                test(1e201, 'one sexsexagintillion');
                test(1e204, 'one septensexagintillion');
                test(1e207, 'one octosexagintillion');
                test(1e210, 'one novemsexagintillion');
                test(1e213, 'one septuagintillion');
                test(1e216, 'one unseptuagintillion');
                test(1e219, 'one duoseptuagintillion');
                test(1e222, 'one treseptuagintillion');
                test(1e225, 'one quattuorseptuagintillion');
                test(1e228, 'one quinseptuagintillion');
                test(1e231, 'one sexseptuagintillion');
                test(1e234, 'one septenseptuagintillion');
                test(1e237, 'one octoseptuagintillion');
                test(1e240, 'one novemseptuagintillion');
                test(1e243, 'one octogintillion');
                test(1e246, 'one unoctogintillion');
                test(1e249, 'one duooctogintillion');
                test(1e252, 'one treoctogintillion');
                test(1e255, 'one quattuoroctogintillion');
                test(1e258, 'one quinoctogintillion');
                test(1e261, 'one sexoctogintillion');
                test(1e264, 'one septenoctogintillion');
                test(1e267, 'one octooctogintillion');
                test(1e270, 'one novemoctogintillion');
                test(1e273, 'one nonagintillion');
                test(1e276, 'one unnonagintillion');
                test(1e279, 'one duononagintillion');
                test(1e282, 'one trenonagintillion');
                test(1e285, 'one quattuornonagintillion');
                test(1e288, 'one quinnonagintillion');
                test(1e291, 'one sexnonagintillion');
                test(1e294, 'one septennonagintillion');
                test(1e297, 'one octononagintillion');
                test(1e300, 'one novemnonagintillion');
                test(1e303, 'one centillion');
                test(1e306, 'one uncentillion');
            }
        );

        describe(
            'numberName does not name',
            function ()
            {
                function test(arg)
                {
                    it
                    (
                        String(arg),
                        function ()
                        {
                            assert.strictEqual(numberName(arg), void 0);
                        }
                    );
                }

                test(void 0);
                test(Infinity);
                test(-Infinity);
                test(NaN);
            }
        );

        describe
        (
            'numberName handles expected precision in',
            function ()
            {
                function makeAbs(significand, exp)
                {
                    var abs = eval(significand + 'e' + exp);
                    return abs;
                }

                function mapDigit(digit)
                {
                    return UNIT_NAMES[digit];
                }

                function test(magnitude, precision)
                {
                    var start = precision === 1 ? 1 : Math.pow(10, precision - 1) + 1;
                    var exp = magnitude - (precision - 1);
                    it
                    (
                        makeAbs(start, exp) + ' to ' + makeAbs(Math.pow(10, precision) - 1, exp),
                        function ()
                        {
                            var limit = Math.pow(10, precision);
                            var step = Math.floor(limit / 100) * 11 + 1;
                            for (var intDigits = start; intDigits < limit; intDigits += step)
                            {
                                if (intDigits % 10)
                                {
                                    var number = makeAbs(intDigits, exp);
                                    var intDigitStr = String(intDigits);
                                    var expected =
                                    'zero point ' + 'zero '.repeat(-magnitude - 1) +
                                    Array.prototype.map.call(intDigitStr, mapDigit).join(' ');
                                    assert.equal
                                    (
                                        numberName(number),
                                        expected,
                                        'Unexpected output for ' + number
                                    );
                                }
                            }
                        }
                    );
                }

                var UNIT_NAMES =
                [
                    'zero',
                    'one',
                    'two',
                    'three',
                    'four',
                    'five',
                    'six',
                    'seven',
                    'eight',
                    'nine',
                ];

                var magnitude = -323;
                for (var precisionm1 = 0; ; ++precisionm1)
                {
                    var precisionLimit = numberName.debug.PRECISION_LIMITS[precisionm1];
                    if (precisionLimit === void 0)
                        break;
                    if (!isFinite(precisionLimit))
                        precisionLimit = magnitude;
                    for (; magnitude <= precisionLimit; ++magnitude)
                        test(magnitude, precisionm1 + 1);
                }
            }
        );
    }

    var numberName;
    var TestSuite = { init: init };

    if (typeof self !== 'undefined')
    {
        numberName = self.numberName;
        self.TestSuite = TestSuite;
    }
    if (typeof module !== 'undefined')
    {
        numberName = module.require('../lib/number-name.js');
        module.exports = TestSuite;
    }
}
)();
