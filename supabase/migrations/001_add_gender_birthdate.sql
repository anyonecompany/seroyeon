-- registrations 테이블에 성별, 생년월일 컬럼 추가
-- Supabase Dashboard > SQL Editor 에서 실행하거나, supabase db push 로 적용

ALTER TABLE registrations
  ADD COLUMN IF NOT EXISTS gender text,
  ADD COLUMN IF NOT EXISTS birth_date text;

-- gender: '남성' | '여성'
-- birth_date: 'YYMMDD' (6자리 숫자 문자열, 예: '950315')

COMMENT ON COLUMN registrations.gender IS '성별 (남성/여성)';
COMMENT ON COLUMN registrations.birth_date IS '생년월일 YYMMDD 6자리';
