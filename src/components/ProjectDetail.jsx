import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Linkedin, Twitter, ExternalLink, Upload, Image as ImageIcon, Check, List, Phone, Calendar, Hospital, User, Map, Search, BarChart, PieChart, Activity, Home, Download } from 'lucide-react';

// 自定义项目图片组件
const ModernWebsiteImage = () => (
  <div className="w-full h-full bg-white flex flex-col justify-center items-center p-8 overflow-hidden relative">
    {/* 网格背景 */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-12 h-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-l border-gray-200 h-full"></div>
        ))}
      </div>
    </div>
    
    {/* 顶部导航占位 */}
    <div className="absolute top-0 right-0 p-8">
      <div className="flex gap-6">
        <span className="text-indigo-500 opacity-50">HI</span>
        <span className="text-indigo-500 opacity-50">PROFILE</span>
        <span className="text-indigo-500 opacity-50">WORK</span>
        <span className="text-indigo-500 opacity-50">CONTACT</span>
      </div>
    </div>
    
    {/* 左上角Logo占位 */}
    <div className="absolute top-0 left-0 p-8">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
          ZL
        </div>
        <div className="ml-2">
          <div className="text-xs font-medium">ZhyingLu</div>
          <div className="text-xs text-gray-500">UX + UI Designer</div>
        </div>
      </div>
    </div>
    
    {/* 主要内容 */}
    <div className="text-center mb-4">
      <p className="text-gray-400 uppercase tracking-wider text-sm">HI THERE, I AM</p>
    </div>
    
    <div className="flex items-center mb-8">
      <h1 className="text-5xl font-bold text-stone-800 mr-4">ZhyingLu</h1>
      <div className="w-16 h-16 rounded-full bg-stone-100 overflow-hidden border-2 border-stone-200">
        <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400"></div>
      </div>
    </div>
    
    <div className="flex items-center mb-12">
      <p className="text-2xl text-stone-600 mr-2">A passionate</p>
      <h2 className="text-3xl font-bold text-stone-900">UX | UI Designer</h2>
    </div>
    
    <div className="flex gap-4">
      <a href="https://github.com/chinyinglu" target="_blank" rel="noopener noreferrer" className="block">
        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100">
          <Github size={18} className="text-indigo-500" />
        </div>
      </a>
    </div>
  </div>
);

// 猫咪识别系统组件
const CatRecognitionSystem = () => (
  <div className="w-full h-full bg-white flex flex-col items-center p-8">
    <div className="w-full max-w-4xl mx-auto">
      {/* 系统标题 */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">猫咪品种识别系统</h3>
        <p className="text-gray-500 text-sm mt-2">使用深度学习技术识别13种猫咪品种</p>
      </div>
      
      {/* 主界面模拟 */}
      <div className="w-full bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-4">
        {/* 上传区域 */}
        <div className="mb-6 border-2 border-dashed border-blue-200 rounded-lg bg-blue-50 p-8 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Upload size={24} className="text-blue-500" />
          </div>
          <p className="text-sm text-gray-600 mb-2">点击或拖拽上传猫咪图片</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium">
            选择图片
          </button>
        </div>
        
        {/* 结果展示 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* 原始图片 */}
          <div className="flex-1 border border-gray-200 rounded-lg p-3 bg-white">
            <div className="text-xs text-gray-500 mb-2">上传的图片</div>
            <div className="aspect-square bg-white rounded overflow-hidden flex items-center justify-center">
              <img 
                src="/persian.png" 
                alt="波斯猫" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* 识别结果 */}
          <div className="flex-1 border border-gray-200 rounded-lg p-3 bg-white">
            <div className="text-xs text-gray-500 mb-2">识别结果</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-green-50 p-2 rounded border border-green-100">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm font-medium">波斯猫</span>
                </div>
                <span className="text-sm font-medium text-green-600">87%</span>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-100">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                    <List size={14} className="text-gray-500" />
                  </div>
                  <span className="text-sm">暹罗猫</span>
                </div>
                <span className="text-sm text-gray-600">9%</span>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-100">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                    <List size={14} className="text-gray-500" />
                  </div>
                  <span className="text-sm">英国短毛猫</span>
                </div>
                <span className="text-sm text-gray-600">4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 品种列表 */}
      <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-white">
        <h4 className="text-md font-semibold text-gray-700 mb-3">支持识别的猫咪品种</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            '阿比西尼亚猫', '孟加拉猫', '伯曼猫', '孟买猫', 
            '埃及猫', '英国短毛猫', '缅因猫', '波斯猫', 
            '折耳猫', '浣熊猫', '俄罗斯蓝猫', '暹罗猫', '斯芬克斯猫'
          ].map((breed, idx) => (
            <div key={idx} className="text-sm py-1 px-2 bg-gray-50 rounded border border-gray-100">
              {breed}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// UI组件库示例组件
const UIComponentsExample = () => (
  <div className="flex flex-col items-center justify-center h-full p-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8">
      {/* 按钮组 */}
      <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm">
        <div className="text-xs text-gray-500 mb-2">按钮</div>
        <div className="flex flex-col space-y-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">主按钮</button>
          <button className="border border-gray-300 px-4 py-2 rounded-md text-sm">次按钮</button>
          <button className="text-blue-500 text-sm">文本按钮</button>
        </div>
      </div>
      
      {/* 表单元素 */}
      <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm">
        <div className="text-xs text-gray-500 mb-2">表单</div>
        <div className="flex flex-col space-y-2">
          <input type="text" placeholder="请输入内容" className="border border-gray-300 px-3 py-2 rounded-md text-sm" />
          <select className="border border-gray-300 px-3 py-2 rounded-md text-sm">
            <option>选项一</option>
            <option>选项二</option>
          </select>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" id="cb" />
            <label htmlFor="cb" className="text-sm">复选框</label>
          </div>
        </div>
      </div>
      
      {/* 数据展示 */}
      <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm">
        <div className="text-xs text-gray-500 mb-2">数据展示</div>
        <div className="space-y-2">
          <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
          <div className="h-2 bg-green-500 rounded-full w-1/2"></div>
          <div className="h-2 bg-yellow-500 rounded-full w-1/4"></div>
          <div className="flex justify-between text-xs mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      
      {/* 导航元素 */}
      <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm">
        <div className="text-xs text-gray-500 mb-2">导航</div>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center text-sm bg-blue-50 text-blue-500 px-2 py-1 rounded">
            <span className="w-1 h-4 bg-blue-500 mr-2"></span>首页
          </div>
          <div className="flex items-center text-sm px-2 py-1 rounded">
            <span className="w-1 h-4 bg-transparent mr-2"></span>产品
          </div>
          <div className="flex items-center text-sm px-2 py-1 rounded">
            <span className="w-1 h-4 bg-transparent mr-2"></span>服务
          </div>
        </div>
      </div>
    </div>
    
    {/* 表格示例 */}
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">姓名</th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">年龄</th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">职业</th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2">张三</td>
            <td className="px-4 py-2">28</td>
            <td className="px-4 py-2">工程师</td>
            <td className="px-4 py-2">
              <button className="text-blue-500 text-xs">编辑</button>
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">李四</td>
            <td className="px-4 py-2">32</td>
            <td className="px-4 py-2">设计师</td>
            <td className="px-4 py-2">
              <button className="text-blue-500 text-xs">编辑</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// 医疗陪诊小程序组件
const MedicalAssistantApp = () => (
  <div className="w-full h-full bg-white flex flex-col items-center p-8">
    <div className="w-full max-w-4xl mx-auto">
      {/* 应用标题 */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">医疗陪诊小程序</h3>
        <p className="text-gray-500 text-sm mt-2">基于微信小程序原生框架的医疗服务应用</p>
      </div>
      
      {/* 小程序模拟界面 */}
      <div className="w-full border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* 头部导航 */}
        <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
          <div className="text-lg font-medium">医疗陪诊</div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          </div>
        </div>
        
        {/* 主要内容区域 */}
        <div className="p-4 bg-gray-50">
          {/* 搜索框 */}
          <div className="bg-white rounded-full flex items-center px-4 py-2 mb-4 shadow-sm">
            <Search size={18} className="text-gray-400 mr-2" />
            <div className="text-gray-400 text-sm">搜索医院或科室</div>
          </div>
          
          {/* 功能导航 */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { icon: <Hospital size={24} className="text-blue-500" />, name: '医院' },
              { icon: <User size={24} className="text-green-500" />, name: '医生' },
              { icon: <Calendar size={24} className="text-orange-500" />, name: '预约' },
              { icon: <Map size={24} className="text-purple-500" />, name: '附近' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 flex flex-col items-center justify-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <div className="text-xs text-gray-700">{item.name}</div>
              </div>
            ))}
          </div>
          
          {/* 推荐医院 */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="text-md font-medium text-gray-800">推荐医院</div>
              <div className="text-xs text-blue-500">查看全部</div>
            </div>
            <div className="space-y-3">
              {[
                { name: '协和医院', type: '三甲', dist: '2.5km' },
                { name: '同济医院', type: '三甲', dist: '4.1km' }
              ].map((hospital, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg flex items-center justify-between shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <Hospital size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{hospital.name}</div>
                      <div className="text-xs text-gray-500">{hospital.type}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">{hospital.dist}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 我的预约 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-md font-medium text-gray-800">我的预约</div>
              <div className="text-xs text-blue-500">全部预约</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                    <Calendar size={20} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">神经内科 - 李医生</div>
                    <div className="text-xs text-gray-500">协和医院 · 明日 10:30</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">已确认</div>
              </div>
              <div className="flex justify-between border-t pt-3">
                <button className="text-xs text-gray-500 flex items-center">
                  <Phone size={14} className="mr-1" /> 联系陪诊员
                </button>
                <button className="text-xs text-blue-500">查看详情</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部导航 */}
        <div className="flex items-center justify-around py-3 border-t border-gray-200 bg-white">
          {['首页', '医院', '预约', '我的'].map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center ${idx === 0 ? 'text-blue-500' : 'text-gray-500'}`}>
              <div className="w-5 h-5 mb-1"></div>
              <div className="text-xs">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 昆明二手房数据可视化组件
const HouseDataVisualization = () => (
  <div className="w-full h-full bg-white flex flex-col items-center p-8">
    <div className="w-full max-w-5xl mx-auto">
      {/* 项目标题 */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">昆明二手房数据可视化</h3>
        <p className="text-gray-500 text-sm mt-2">数据采集、清洗、分析与可视化全流程项目</p>
      </div>
      
      {/* 数据可视化展示区 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 价格分布图 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 mb-4">各区域二手房平均单价(元/㎡)</h4>
          <div className="h-[220px] flex items-end space-x-2 px-2">
            {[
              { name: '五华区', value: 15800, color: 'bg-blue-500' },
              { name: '盘龙区', value: 14200, color: 'bg-blue-400' },
              { name: '西山区', value: 13600, color: 'bg-blue-500' },
              { name: '官渡区', value: 12500, color: 'bg-blue-400' },
              { name: '呈贡区', value: 11200, color: 'bg-blue-500' },
              { name: '安宁市', value: 9800, color: 'bg-blue-400' },
              { name: '晋宁区', value: 8500, color: 'bg-blue-500' },
              { name: '东川区', value: 6800, color: 'bg-blue-400' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div 
                  className={`w-full ${item.color} rounded-t`} 
                  style={{ height: `${(item.value / 16000) * 180}px` }}
                ></div>
                <div className="text-xs text-gray-600 mt-1 transform -rotate-45 origin-top-left">
                  {item.name}
                </div>
                <div className="text-xs font-medium mt-4">
                  {Math.round(item.value / 1000)}k
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 房源分布饼图 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 mb-4">房源数量分布</h4>
          <div className="relative h-[220px] flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-8 border-blue-500 absolute"></div>
            <div className="w-32 h-32 rounded-full absolute" style={{ 
              clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)',
              backgroundColor: '#3B82F6' 
            }}></div>
            <div className="w-32 h-32 rounded-full absolute" style={{ 
              clipPath: 'polygon(50% 50%, 100% 100%, 50% 100%)',
              backgroundColor: '#60A5FA' 
            }}></div>
            <div className="w-32 h-32 rounded-full absolute" style={{ 
              clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 30%)',
              backgroundColor: '#93C5FD' 
            }}></div>
            
            {/* 图例 */}
            <div className="absolute top-0 right-0 space-y-2">
              {[
                { name: '五华区', value: '28%', color: 'bg-blue-500' },
                { name: '盘龙区', value: '24%', color: 'bg-blue-400' },
                { name: '西山区', value: '20%', color: 'bg-blue-300' },
                { name: '其他区域', value: '28%', color: 'bg-blue-200' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className={`w-3 h-3 ${item.color} rounded-sm mr-2`}></div>
                  <span className="text-xs text-gray-600">{item.name}</span>
                  <span className="text-xs font-medium ml-2">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 户型分布图 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 mb-4">房屋户型分布</h4>
          <div className="space-y-3 pt-2">
            {[
              { name: '二室一厅', value: 35, color: 'bg-green-500' },
              { name: '三室一厅', value: 28, color: 'bg-green-400' },
              { name: '三室二厅', value: 18, color: 'bg-green-500' },
              { name: '一室一厅', value: 12, color: 'bg-green-400' },
              { name: '四室二厅', value: 7, color: 'bg-green-500' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">{item.name}</span>
                  <span className="text-xs font-medium">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 价格-面积散点图 */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-sm font-medium text-gray-700 mb-4">总价与建筑面积关系</h4>
          <div className="h-[220px] relative">
            {/* Y轴 */}
            <div className="absolute left-10 top-0 bottom-10 w-px bg-gray-300"></div>
            {/* X轴 */}
            <div className="absolute left-10 right-0 bottom-10 h-px bg-gray-300"></div>
            
            {/* 散点 */}
            {[
              { x: 20, y: 40, size: 4 }, { x: 30, y: 60, size: 5 },
              { x: 40, y: 85, size: 6 }, { x: 60, y: 110, size: 7 },
              { x: 75, y: 130, size: 6 }, { x: 90, y: 150, size: 8 },
              { x: 100, y: 190, size: 5 }, { x: 120, y: 210, size: 9 },
              { x: 50, y: 95, size: 4 }, { x: 70, y: 140, size: 6 },
              { x: 85, y: 160, size: 7 }, { x: 110, y: 200, size: 8 },
              { x: 40, y: 70, size: 5 }, { x: 55, y: 100, size: 6 },
              { x: 65, y: 125, size: 7 }, { x: 80, y: 145, size: 5 }
            ].map((point, idx) => (
              <div 
                key={idx}
                className="absolute rounded-full bg-blue-500 opacity-70"
                style={{ 
                  left: `${10 + (point.x / 120) * 85}%`, 
                  bottom: `${10 + (point.y / 220) * 75}%`,
                  width: `${point.size}px`,
                  height: `${point.size}px`
                }}
              ></div>
            ))}
            
            {/* 轴标签 */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-gray-500 -rotate-90">总价(万元)</div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">建筑面积(㎡)</div>
            
            {/* 趋势线 */}
            <div className="absolute left-[10%] bottom-[15%] right-[5%] top-[25%] w-full h-full">
              <div className="w-full h-0.5 bg-red-400 opacity-50 absolute top-0 left-0 rotate-[30deg] origin-left"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 系统架构图 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
        <h4 className="text-md font-medium text-gray-700 mb-6 text-center">项目架构</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* 数据爬虫模块 */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 w-full md:w-1/3">
            <div className="text-center mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Download size={24} className="text-blue-600" />
              </div>
              <h5 className="font-medium text-sm">数据爬虫模块</h5>
            </div>
            <ul className="text-xs space-y-2 text-gray-600">
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>URL管理器</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>HTML下载器</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>HTML解析器</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>数据输出器</span>
              </li>
            </ul>
          </div>
          
          {/* 数据分析模块 */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 w-full md:w-1/3">
            <div className="text-center mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <BarChart size={24} className="text-green-600" />
              </div>
              <h5 className="font-medium text-sm">数据分析模块</h5>
            </div>
            <ul className="text-xs space-y-2 text-gray-600">
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>价格与面积分析</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>房屋属性分析</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>商业属性分析</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>K-means聚类分析</span>
              </li>
            </ul>
          </div>
          
          {/* 可视化模块 */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 w-full md:w-1/3">
            <div className="text-center mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <PieChart size={24} className="text-purple-600" />
              </div>
              <h5 className="font-medium text-sm">数据可视化模块</h5>
            </div>
            <ul className="text-xs space-y-2 text-gray-600">
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>柱状图/箱线图</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>散点图/折线图</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>饼图/环形图</span>
              </li>
              <li className="flex items-center gap-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span>高德地图可视化</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 模拟项目数据
const projectsData = [
  {
    id: '1',
    title: '现代个人网站',
    description: '基于 Vite + React + TailwindCSS + shadcn/ui 的极简包豪斯风格个人主页。',
    tech: ['React', 'TailwindCSS', 'shadcn/ui'],
    link: '#',
    fullDescription: '这是一个设计精美的现代个人网站，采用了包豪斯风格的设计理念，简约而不简单。整个网站使用了 React 作为前端框架，TailwindCSS 进行样式设计，以及 shadcn/ui 组件库来提升用户体验。网站具有响应式设计，可以在各种设备上完美展示。',
    features: [
      '响应式设计，适配移动端和桌面端',
      '平滑的页面过渡动画',
      '深色模式支持',
      '高性能的代码实现',
      '无障碍设计，支持屏幕阅读器'
    ],
    useCustomImage: true
  },
  {
    id: '2',
    title: 'UI 组件库',
    description: '自研高可用 UI 组件库，支持主题切换与响应式设计。',
    tech: ['TypeScript', 'Storybook', 'CSS-in-JS', 'React', 'Jest'],
    link: 'https://github.com/yourusername/ui-component-library',
    fullDescription: '这是一个企业级 UI 组件库项目，旨在提供统一、高效的用户界面解决方案。基于 TypeScript 和 React 开发，采用了现代前端工程化实践。该组件库包含 50+ 个常用组件，覆盖了表单控件、数据展示、导航、反馈等多个分类。每个组件都经过严格的单元测试和性能测试，确保在高流量应用中也能稳定运行。该项目采用了 monorepo 架构，使用 Lerna 进行包管理，便于维护和版本控制。',
    features: [
      '50+ 高质量React组件，包括数据表格、表单、图表等',
      '完善的主题系统，支持动态主题切换和暗黑模式',
      '基于TypeScript开发，提供完整类型定义',
      '自动化测试覆盖率>90%，确保组件质量',
      'Storybook文档系统，提供交互式示例',
      '支持按需加载，优化包体积',
      '支持国际化，内置中英文语言包',
      '无障碍设计，符合WCAG 2.1标准'
    ],
    useCustomUIComponents: true,
    imageDescription: '这是一个由多个组件构成的UI组件库，包含按钮、表单、导航、表格等常用界面元素。整体设计风格现代简约，支持主题定制。',
    codeSnippet: `// 按钮组件示例
import React from 'react';
import { Button, Space } from 'my-ui-lib';

const ButtonDemo = () => (
  <Space>
    <Button type="primary">主按钮</Button>
    <Button>默认按钮</Button>
    <Button type="dashed">虚线按钮</Button>
    <Button type="link">链接按钮</Button>
  </Space>
);`,
    demoLink: 'https://ui-components-demo.example.com'
  },
  {
    id: '3',
    title: '猫咪品种识别系统',
    description: '基于深度学习的猫咪品种识别应用，能准确区分13种不同猫咪品种。',
    tech: ['Python', 'PyTorch', 'Flask', 'PIL'],
    link: 'https://github.com/yourusername/deepleaning_cat',
    fullDescription: '这是一个基于深度学习的猫咪品种识别系统，使用PyTorch框架开发。该系统能够识别13种不同的猫咪品种，包括阿比西尼亚猫、孟加拉猫、伯曼猫、孟买猫、埃及猫、英国短毛猫、缅因猫、波斯猫、折耳猫、浣熊猫、俄罗斯蓝猫、暹罗猫和斯芬克斯猫。系统使用预训练的深度学习模型，通过图像处理流程（调整大小、标准化、转换为张量）实现高准确率的猫咪品种识别。该项目提供了一个基于Flask的Web应用程序，允许用户上传猫咪图片并获取品种预测结果。',
    features: [
      '识别13种常见猫咪品种的能力',
      '直观的Web界面，支持图片上传和结果显示',
      '基于PyTorch的深度学习模型，具有高识别准确率',
      '完整的图像处理流程（大小调整、标准化等）',
      '轻量级Flask后端，易于部署和扩展',
      '详细的训练流程和数据预处理文档'
    ],
    useCustomCatSystem: true,
    imageDescription: '这是一个猫咪品种识别系统的界面展示。用户可以上传猫咪图片，系统会自动分析并识别出猫咪的品种，包括阿比西尼亚猫、孟加拉猫等13种不同品种。',
    codeSnippet: `# Flask应用程序代码片段
from flask import Flask, render_template, request
import torch
from torchvision import transforms
from PIL import Image
import torch.nn.functional as F

app = Flask(__name__)
model = torch.load('model/catcls-best-model.pth')
model.eval()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'file' not in request.files:
            return render_template('index.html', error='No file part')
        
        file = request.files['file']
        img = Image.open(file).convert('RGB')
        
        # 预处理图像
        transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ])
        
        img_tensor = transform(img).unsqueeze(0)
        
        # 预测
        with torch.no_grad():
            output = model(img_tensor)
            probabilities = F.softmax(output, dim=1)
            cat_breed_idx = torch.argmax(probabilities, dim=1).item()
            
        return render_template('index.html', result=cat_breeds[cat_breed_idx])
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)`,
  },
  {
    id: '4',
    title: '医疗陪诊小程序',
    description: '基于微信小程序原生框架的医疗服务应用，提供医院查询、医生预约、陪诊服务等功能。',
    tech: ['微信小程序', 'WXML/WXSS', 'JavaScript', '微信云开发'],
    link: 'https://github.com/yourusername/medical-assistant-miniprogram',
    fullDescription: '医疗陪诊小程序是基于微信小程序原生框架开发的医疗服务应用，旨在为用户提供医院查询、医生预约、陪诊服务等功能。项目采用了模块化的开发方式，功能组件化，使用响应式设计适配不同的屏幕尺寸。小程序包含多个核心功能模块，包括首页、医院查询、预约管理和用户中心等，每个模块都有特定的技术实现方式和关键API调用。',
    features: [
      '医院查询与筛选功能，支持按距离、类型等多维度筛选',
      '医生预约系统，包括排班表与在线预约流程',
      '陪诊服务预约与管理，包括待确认、已确认等多种状态',
      '用户中心，支持个人信息管理与预约记录查询',
      '基于地理位置的附近医院推荐',
      '预约提醒与服务评价系统'
    ],
    useCustomMedicalApp: true,
    imageDescription: '这是一个医疗陪诊小程序的界面展示，包含首页导航、医院查询、预约管理等多个功能模块。用户可以通过小程序轻松查找医院、预约医生和陪诊服务。',
  },
  {
    id: '5',
    title: '昆明二手房数据可视化',
    description: '从爬虫采集到数据分析与可视化的全流程项目，展现昆明二手房市场多维度分析。',
    tech: ['Python', 'Pandas', 'Matplotlib', 'K-means'],
    link: 'https://github.com/yourusername/kunming-housing-data-visualization',
    fullDescription: '本项目是一个完整的数据分析系统，专注于昆明二手房市场数据的采集、处理、分析和可视化。项目包含了从数据爬取、数据清洗、数据分析到数据可视化的全流程实现，旨在通过数据挖掘和可视化技术，深入了解昆明二手房市场的价格分布、区域特点和市场趋势。系统分为三个主要模块：数据爬虫程序负责从链家网站采集数据；数据分析程序对采集的数据进行清洗、处理和分析；可视化部分则通过多种图表直观展示分析结果。',
    features: [
      '完整的数据分析流程：从数据采集、清洗到分析、可视化的全流程实现',
      '自定义聚类算法：实现了标准K-means和二分K-means两种聚类算法',
      '多维度数据分析：从价格、面积、户型、区域等多个维度分析昆明二手房市场',
      '丰富的可视化呈现：使用多种图表类型展示分析结果',
      '异常处理机制：爬虫程序实现了完善的异常处理和重试机制',
      '高德地图集成：基于高德地图API的地理位置可视化'
    ],
    useCustomHouseDataViz: true,
    imageDescription: '这是昆明二手房数据可视化项目的界面展示，包含了多种图表类型，展示了昆明二手房市场的价格分布、区域特点、户型分布等多维度分析结果。'
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">项目不存在</h2>
        <Link to="/#portfolio" className="text-blue-600 hover:underline flex items-center gap-1">
          <ArrowLeft size={16} /> 返回上一级
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full min-h-screen p-6 md:p-12 max-w-6xl mx-auto project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        to="/#portfolio" 
        className="inline-flex items-center text-stone-700 hover:text-stone-900 mb-8 transition-colors"
      >
        <ArrowLeft size={18} className="mr-1" /> 返回上一级
      </Link>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">{project.title}</h1>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
        
        <div className="mb-8 bg-stone-100 rounded-xl overflow-hidden">
          {project.useCustomImage ? (
            <ModernWebsiteImage />
          ) : project.useCustomUIComponents ? (
            <UIComponentsExample />
          ) : project.useCustomCatSystem ? (
            <CatRecognitionSystem />
          ) : project.useCustomMedicalApp ? (
            <MedicalAssistantApp />
          ) : project.useCustomHouseDataViz ? (
            <HouseDataVisualization />
          ) : (
            <div className="flex flex-col">
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              {project.imageDescription && (
                <div className="p-4 bg-stone-200 border-t border-stone-300">
                  <p className="text-stone-700 italic">{project.imageDescription}</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-stone-800">项目描述</h2>
          <p className="text-stone-600 leading-relaxed">{project.fullDescription}</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-stone-800">主要特点</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-stone-600">{feature}</li>
            ))}
          </ul>
        </div>
        
        {project.codeSnippet && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-stone-800">代码示例</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <pre>{project.codeSnippet}</pre>
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-4 mt-8">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-black font-extrabold px-8 py-3 rounded-lg text-lg tracking-wide hover:from-blue-600 hover:to-blue-700 transform hover:translate-y-[-2px] transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10 text-opacity-100">查看完整项目</span>
              <span className="absolute inset-0 bg-white opacity-80 group-hover:opacity-90 transition-opacity duration-300"></span>
              <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative z-10">→</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail; 