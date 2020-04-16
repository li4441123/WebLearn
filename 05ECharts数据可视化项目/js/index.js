//柱形图1
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //指定配置项
    var option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0',
            right: '0',
            top: '10px',
            bottom: '4%',
            containLabel: true
        },
        // X轴设置
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                show: false
            }
        }],

        // Y轴设置
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },

            // Y轴线样式
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },

            // Y轴分割线
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],

        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };

    //把配置赋给实例对象
    myChart.setOption(option);

    //echarts图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

// 柱形图2
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));

    // 配置项
    var option = {
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985',

                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            top: '40%',
            //	padding:'0 0 10 0',
            containLabel: true,
        },
        legend: { //图例组件，颜色和名字
            right: '10%',
            top: '30%',
            itemGap: 16,
            itemWidth: 18,
            itemHeight: 10,
            data: [{
                name: '健康度',
                //icon:'image://../wwwroot/js/url2.png', //路径
            },
                {
                    name: '可用度',
                }
            ],
            textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        xAxis: [{
            type: 'category',
            //	boundaryGap: true,//坐标轴两边留白
            data: ['22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35', '22:40', '22:18', '22:23', '22:25', '22:28', '22:30', '22:33', '22:35', '22:40'],
            axisLabel: { //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#078ceb',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
                rotate: 50,
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
            axisLine: { //坐标轴轴线相关设置
                lineStyle: {
                    color: '#fff',
                    opacity: 0.2
                }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
            }
        }],
        yAxis: [{
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    opacity: 0.06
                }
            }

        }],
        series: [{
            name: '健康度',
            type: 'bar',
            data: [10, 15, 30, 45, 55, 60, 62, 80, 80, 62, 60, 55, 45, 30, 15, 10],
            barWidth: 10,
            barGap: 0, //柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,
            //       },
            //     },
            // },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5768EF'
                    }, {
                        offset: 1,
                        color: '#5768EF'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
            {
                name: '可用度',
                type: 'bar',
                data: [8, 5, 25, 30, 35, 55, 62, 78, 65, 55, 60, 45, 42, 15, 12, 5],
                barWidth: 10,
                barGap: 0, //柱间距离
                // label: {//图形上的文本标签
                //     normal: {
                //       show: true,
                //       position: 'top',
                //       textStyle: {
                //           color: '#a8aab0',
                //           fontStyle: 'normal',
                //           fontFamily: '微软雅黑',
                //           fontSize: 12,   
                //       },
                //     },
                // },
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#69CBF2'
                        }, {
                            offset: 1,
                            color: '#69CBF2'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
            }
        ]
    };
    //把配置赋给实例对象
    myChart.setOption(option);

    //echarts图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

// 折线图1
(function () {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {

        // backgroundColor: '#0f375f',
        grid: {
            top: "25%",
            bottom: "10%" //也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["销售水量", "主营业务"],
            top: "15%",
            textStyle: {
                color: "#ffffff"
            }
        },
        xAxis: {
            data: [
                "当年完成水量",
                "去年同期水量",
                "滚动目标值水量",
                "全年目标值水量",
                "当年完成金额",
                "去年同期金额",
                "滚动目标金额",
                "全年目标值",

            ],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#01FCE3'
                }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac" //X轴文字颜色
                }
            },

        },
        yAxis: [{
            type: "value",
            name: "亿元",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            },

        },
            {
                type: "value",
                name: "同比",
                nameTextStyle: {
                    color: "#ebf8ac"
                },
                position: "right",
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "#ebf8ac"
                    }
                }
            },
            {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                    }
                }
            }
        ],
        series: [{
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle: {
                color: "rgba(5,140,255, 0.2)"
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        },
            {
                name: "主营业务",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                            {
                                offset: 1,
                                color: "#4693EC"
                            }
                        ])
                    }
                },
                data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            }
        ]
    };
    //把配置赋给实例对象
    myChart.setOption(option);

    //echarts图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//折线图2
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        // backgroundColor: '#394056',
        title: {
            text: '请求数',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#fff'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['移动', '电信', '联通'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },

            position: 'bottom',
            offset: 20,
            data: ['', '', '', '', '', '', '', '', '', '', {
                value: '周六',
                textStyle: {
                    align: 'left'
                }
            }, '周日']
        }],
        yAxis: [{
            type: 'value',
            name: '单位（%）',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '移动',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12

                }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
            name: '电信',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }, {
            name: '联通',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: 'rgb(219,50,51)',
                    borderColor: 'rgba(219,50,51,0.2)',
                    borderWidth: 12
                }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
        },]
    };
    //把配置赋给实例对象
    myChart.setOption(option);

    //echarts图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//饼状图
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(200,231,242,0.9)',
            textStyle: {
                color: 'rgba(20,34,54,1)'
            },
            formatter: function (param) {
                if (param.data.name == 'other') return '';
                return param.name + '</br>在线率: ' + param.percent + '%';
            }
        },
        // 内圈背景，外圈背景，内圈数据，多余数据，外圈数据
        color: ['rgba(3, 128, 195, 0.1)', 'rgba(38, 66, 89, 1)', 'rgba(110, 111, 255, 1)', 'transparent', 'rgba(61, 208, 241, 1)'],
        series: [{
            name: '内层背景',
            type: 'pie',
            radius: ['60%', '80%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [{
                value: 0,
                name: '内层背景'
            }]
        },
            {
                name: '外层背景',
                type: 'pie',
                radius: ['80%', '90%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [{
                    value: 0,
                    name: '外层背景'
                }]
            },
            {
                name: 'IPC',
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        padding: [0, 0, 0, 80],
                        align: 'center',
                        width: 70,
                        height: 50,
                        lineHeight: 14, // 控制\n的行高
                        fontSize: 14,
                        formatter: function (param) {
                            return '{a| ' + param.seriesName + '}' + '\n\n{b|' + param.percent + '% }';
                        },
                        rich: {
                            a: {
                                fontSize: 14,
                                color: 'rgba(110, 111, 255, 1)',
                                lineHeight: 19,

                            },
                            b: {
                                fontSize: 20,
                                color: 'rgba(110, 111, 255, 1)',
                                lineHeight: 23,
                            }
                        }
                    },
                },
                data: [{
                    value: 56,
                    name: 'IPC',
                    label: {
                        normal: {
                            show: false
                        }
                    }
                },
                    {
                        value: 100,
                        name: 'other'
                    }
                ]
            },
            {
                name: '设备',
                type: 'pie',
                radius: ['70%', '80%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        padding: [0, 80, 0, 0],
                        align: 'center',
                        width: 70,
                        height: 50,
                        lineHeight: 14, // 控制\n的行高
                        fontSize: 14,
                        formatter: function (param) {
                            return '{a| ' + param.seriesName + '}' + '\n\n{b|' + param.percent + '% }';
                        },
                        rich: {
                            a: {
                                fontSize: 14,
                                color: 'rgba(61, 208, 241, 1)',
                                lineHeight: 19,
                            },
                            b: {
                                fontSize: 20,
                                color: 'rgba(61, 208, 241, 1)',
                                lineHeight: 23,
                            }
                        }
                    },
                },
                data: [{
                    value: 87,
                    name: '设备',
                    label: {
                        normal: {
                            show: false
                        }
                    }
                },
                    {
                        value: 100,
                        name: 'other'
                    },
                ]
            },
        ]
    };
    //把配置赋给实例对象
    myChart.setOption(option);

    //echarts图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//饼状图2
(function () {
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    var option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(200,231,242,0.9)',
            textStyle: {
                color: 'rgba(20,34,54,1)'
            },
            formatter: function (param) {
                if (param.data.name == 'other') return '';
                return param.name + '</br>在线率: ' + param.percent + '%';
            }
        },
        // 内圈背景，外圈背景，内圈数据，多余数据，外圈数据
        color: ['rgba(3, 128, 195, 0.1)', 'rgba(38, 66, 89, 1)', 'rgba(110, 111, 255, 1)', 'transparent', 'rgba(61, 208, 241, 1)'],
        series: [{
            name: '内层背景',
            type: 'pie',
            radius: ['60%', '80%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [{
                value: 0,
                name: '内层背景'
            }]
        },
            {
                name: '外层背景',
                type: 'pie',
                radius: ['80%', '90%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [{
                    value: 0,
                    name: '外层背景'
                }]
            },
            {
                name: 'IPC',
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        padding: [0, 0, 0, 80],
                        align: 'center',
                        width: 70,
                        height: 50,
                        lineHeight: 14, // 控制\n的行高
                        fontSize: 14,
                        formatter: function (param) {
                            return '{a| ' + param.seriesName + '}' + '\n\n{b|' + param.percent + '% }';
                        },
                        rich: {
                            a: {
                                fontSize: 14,
                                color: 'rgba(110, 111, 255, 1)',
                                lineHeight: 19,

                            },
                            b: {
                                fontSize: 20,
                                color: 'rgba(110, 111, 255, 1)',
                                lineHeight: 23,
                            }
                        }
                    },
                },
                data: [{
                    value: 56,
                    name: 'IPC',
                    label: {
                        normal: {
                            show: false
                        }
                    }
                },
                    {
                        value: 100,
                        name: 'other'
                    }
                ]
            },
            {
                name: '设备',
                type: 'pie',
                radius: ['70%', '80%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        padding: [0, 80, 0, 0],
                        align: 'center',
                        width: 70,
                        height: 50,
                        lineHeight: 14, // 控制\n的行高
                        fontSize: 14,
                        formatter: function (param) {
                            return '{a| ' + param.seriesName + '}' + '\n\n{b|' + param.percent + '% }';
                        },
                        rich: {
                            a: {
                                fontSize: 14,
                                color: 'rgba(61, 208, 241, 1)',
                                lineHeight: 19,
                            },
                            b: {
                                fontSize: 20,
                                color: 'rgba(61, 208, 241, 1)',
                                lineHeight: 23,
                            }
                        }
                    },
                },
                data: [{
                    value: 87,
                    name: '设备',
                    label: {
                        normal: {
                            show: false
                        }
                    }
                },
                    {
                        value: 100,
                        name: 'other'
                    },
                ]
            },
        ]
    };
    //把配置赋给实例对象
    myChart.setOption(option);

    //echarts图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

// 中间地图
(function () {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var XAData = [
        [{name: '西安'}, {name: '北京', value: 100}],
        [{name: '西安'}, {name: '上海', value: 100}],
        [{name: '西安'}, {name: '广州', value: 100}],
        [{name: '西安'}, {name: '西宁', value: 100}],
        [{name: '西安'}, {name: '银川', value: 100}]
    ];

    var XNData = [
        [{name: '西宁'}, {name: '北京', value: 100}],
        [{name: '西宁'}, {name: '上海', value: 100}],
        [{name: '西宁'}, {name: '广州', value: 100}],
        [{name: '西宁'}, {name: '西安', value: 100}],
        [{name: '西宁'}, {name: '银川', value: 100}]
    ];

    var YCData = [
        [{name: '银川'}, {name: '北京', value: 100}],
        [{name: '银川'}, {name: '广州', value: 100}],
        [{name: '银川'}, {name: '上海', value: 100}],
        [{name: '银川'}, {name: '西安', value: 100}],
        [{name: '银川'}, {name: '西宁', value: 100}],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {

            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9']; //航线的颜色
    var series = [];
    [
        ['西安', XAData],
        ['西宁', XNData],
        ['银川', YCData]
    ].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: 'red', //arrow箭头的颜色
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top3',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i],
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });
    var option = {
        // backgroundColor: '#000',

        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#00186E',
                    borderColor: '#195BB9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        series: series
    };


    //把配置赋给实例对象
    myChart.setOption(option);

    //echarts图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})()