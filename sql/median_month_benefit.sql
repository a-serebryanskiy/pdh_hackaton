with dataset as (
    select (case
                when days_social_benefits::int = 0 then sum_social_benefits::float8
                else (sum_social_benefits::float8 / days_social_benefits::int *
                      least(days_social_benefits::int, 30)) end) as month_benefits,
           region
    from unemployed_2_data
             inner join region_codes on state_region_code = code_short
    where 1 = 1
      and days_social_benefits != 'None'
      and sum_social_benefits != 'None'
)

select region, percentile_disc(0.5) WITHIN GROUP(ORDER BY month_benefits) as median_month_benefit, count(month_benefits)
from dataset
where (region = 'г. Москва' and month_benefits < 20000)
   or month_benefits < 13000
group by region
order by region;
