/**
 * Copyright (c) 2017-present, Virida YEAwareness, Org. All rights reserved.
 *
 * Licensed under the MIT License.
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://opensource.org/licenses/mit-license.html
 *
 * Unless = required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *------------------------------------------------------------------------
 *
 * @description - Boki client native app AirNow api event ids.
 *
 * @author Tuan Le (tuan.t.lei@gmail.com)
 *
 *------------------------------------------------------------------------
 * @format
 * @flow
 */
'use strict'; // eslint-disable-line

import { Hf } from 'hyperflow';

const airnowAPIEventMap = {
    doEvents: [
        `mutate-notification-setting`
    ],
    requestEvents: [
        `air-now-aqr-feed-data`,
        `air-now-aqr-site-data`,
        `air-now-aqr-forecast-data`
    ]
};

export default Hf.Event.create(airnowAPIEventMap);
