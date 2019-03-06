# koutla swiss

[![NPM version](https://badge.fury.io/js/koutla-swiss.svg)](http://badge.fury.io/js/koutla-swiss) [![Build Status](http://img.shields.io/travis/leny/koutla-swiss.svg)](https://travis-ci.org/leny/koutla-swiss) ![Dependency Status](https://david-dm.org/leny/koutla-swiss.svg) ![Downloads counter](http://img.shields.io/npm/dm/koutla-swiss.svg)

> 🎨 CSS-in-JS toolkit, inspired by Kouto-Swiss

* * *

**koutla swiss** is a rewrite of [**kouto swiss**](http://kouto-swiss.io) (a CSS framework for Stylus) in pure javascript, to be used within _css-in-js_ tools like [**glamor**](https://github.com/threepointone/glamor) or [**emotion**](https://emotion.sh)

* * *

## Installation

```bash
$ npm install --save-dev koutla-swiss
```

## Usage

**koutla-swiss** is a serie of useful, functional utilities to make _CSS-in-JS_ (with librairies like [glamor](https://github.com/threepointone/glamor)).

All the documented functions are accessibles from the root of the lib, like `import {px, padding} from "koutla-swiss";`.

Documentation is generated with [ESDoc](https://doc.esdoc.org) and hosted in [koutla-swiss.js.org](https://koutla-swiss.js.org).

### Example

```javascript
import React from "react";
import {css} from "@emotion/core";
import {rem, margin, flexrow, borderBottom, size, important, mq} from "koutla-swiss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {BORDER_COLOR, MQ_TABLET, MQ_SMALL_DESKTOP} from "../../core/constants";

const styles = {
    container: css({
        ...margin(0, "auto", rem(3.6)),
        ...mq(MQ_TABLET, {
            marginBottom: rem(19.2),
        }),
        ...mq(MQ_SMALL_DESKTOP, {
            breakInside: "avoid",
            marginBottom: rem(9.6),
        }),
    }),
    title: css({
        ...flexrow("space-between", "center"),
        ...margin(0, "auto", rem(3.2)),
        paddingBottom: rem(0.25),
        ...borderBottom(rem(0.1), "solid", BORDER_COLOR),
        fontSize: rem(2.4),
        textAlign: "right",
    }),
    titleContent: {flex: 1},
    hideTitle: css({display: "none"}),
    icon: css({
        ...important(size(rem(2.4))),
    }),
};

export default ({className, title, hideTitle = false, children, icon}) => {
    let $icon;

    icon && ($icon = <FontAwesomeIcon icon={icon} css={styles.icon} />);

    return (
        <section css={styles.container} className={className}>
            <h2 css={[styles.title, hideTitle && styles.hideTitle]}>
                {$icon}
                <span css={styles.titleContent}>{title}</span>
            </h2>
            {children}
        </section>
    );
};
```

> 👉 **NOTE:** this sample component is taken from [my resume](https://github.com/leny/kourikoulom), which relies on koutla-swiss.

* * *

## License

Copyright (c) 2018 [leny.me](http://leny.me)
Licensed under the MIT license.
