import { Step } from './types';
import { Anchor, FileText, Bot, TrendingUp, Magnet, Zap, Infinity } from 'lucide-react';

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Hook Hacker',
    description: '“Tạo 10 câu mở đầu phong cách viral cho một kịch bản YouTube Shorts. Giữ cho mỗi câu dựa trên sự tò mò, súc tích và dưới 12 từ.”',
    promptTemplate: 'Tạo 10 câu mở đầu phong cách viral cho một kịch bản YouTube Shorts về chủ đề [TOPIC]. Giữ cho mỗi câu dựa trên sự tò mò, súc tích và dưới 12 từ.',
    placeholder: 'chủ đề',
    icon: Anchor,
  },
  {
    id: 2,
    title: 'Script Igniter',
    description: '“Viết một kịch bản YouTube Shorts dài 45 giây, thu hút sự chú ý trong 3 giây đầu, xây dựng căng thẳng và kết thúc bằng một cú twist.”',
    promptTemplate: 'Viết một kịch bản YouTube Shorts dài 45 giây, thu hút sự chú ý trong 3 giây đầu, xây dựng căng thẳng và kết thúc bằng một cú twist. Chủ đề: [TOPIC].',
    placeholder: 'chủ đề',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Angle Breaker',
    description: '“Liệt kê 5 quan điểm gây tranh cãi hoặc bất ngờ để khơi gợi bình luận. Sau đó biến quan điểm hay nhất thành một kịch bản sẵn sàng viral.”',
    promptTemplate: 'Liệt kê 5 quan điểm gây tranh cãi hoặc bất ngờ trong lĩnh vực [TOPIC] để khơi gợi bình luận. Sau đó biến quan điểm hay nhất thành một kịch bản sẵn sàng viral.',
    placeholder: 'ngách',
    icon: Bot,
  },
  {
    id: 4,
    title: 'Trend Flip System',
    description: '“Tìm 3 video TikTok viral và tái cấu trúc chúng thành những kịch bản YouTube Shorts mới. Giữ nguyên nhịp flow nhưng làm cho nó trở nên độc đáo.”',
    promptTemplate: 'Tìm 3 video TikTok viral trong lĩnh vực [TOPIC] và tái cấu trúc chúng thành những kịch bản YouTube Shorts mới. Giữ nguyên nhịp flow nhưng làm cho nó trở nên độc đáo.',
    placeholder: 'ngách',
    icon: TrendingUp,
  },
  {
    id: 5,
    title: 'Comment Magnet',
    description: '“Viết một kịch bản YouTube Shorts kết thúc bằng một cú cliffhanger táo bạo hoặc một phát ngôn gây chia rẽ nhằm kích thích tranh luận.”',
    promptTemplate: 'Viết một kịch bản YouTube Shorts kết thúc bằng một cú cliffhanger táo bạo hoặc một phát ngôn gây chia rẽ nhằm kích thích tranh luận trong phần bình luận. Chủ đề: [TOPIC].',
    placeholder: 'chủ đề',
    icon: Magnet,
  },
  {
    id: 6,
    title: 'Fact Shock Builder',
    description: '“Lấy 3 sự thật gây sốc và kết hợp chúng thành một kịch bản nhanh gọn trong 60 giây. Mở đầu bằng một cú hook gây choáng.”',
    promptTemplate: 'Lấy 3 sự thật gây sốc về [TOPIC] và kết hợp chúng thành một kịch bản nhanh gọn trong 60 giây. Mở đầu bằng một cú hook gây choáng, sau đó mang đến giá trị ngay lập tức.',
    placeholder: 'chủ đề',
    icon: Zap,
  },
  {
    id: 7,
    title: 'Series Engine',
    description: '“Giúp tôi tạo một series YouTube Shorts có thể lặp lại. Đưa ra một tên series, góc tiếp cận, và 10 đề cương kịch bản.”',
    promptTemplate: 'Giúp tôi tạo một series YouTube Shorts có thể lặp lại trong lĩnh vực [TOPIC]. Hãy đưa ra một tên series thu hút, góc tiếp cận chính, và 10 đề cương kịch bản theo một công thức đã được chứng minh.',
    placeholder: 'ngách',
    icon: Infinity,
  },
];