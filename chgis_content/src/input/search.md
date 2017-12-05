---
title: Search CHGIS Placenames
layout: base-one.html
date: 2015-12-08 16:00

---
<div class="chunk">
Try this simple query form, or use the <a href="http://maps.cga.harvard.edu/tgaz/" target="_new">API</a>  for advanced searches and formats<br>
 
<!-- form by Danny Markov http://demo.tutorialzine.com/2015/07/7-clean-and-responsive-forms -->
 <form class="form-labels-on-top" method="get" action="http://maps.cga.harvard.edu/tgaz/placename?" target="_blank">

  <div class="form-title-row">
      <img src="http://maps.cga.harvard.edu/tgaz/graf/TGAZ_API_icon.png"> <h3>Search Placename 地名查询</h3>
  </div>


  <div class="form-row">
      <label>
          <span>name  地名</span>
          <input type=hidden name=fmt value='html'>
          <input type="text" name="n">
      </label>
  </div>

  <div class="form-row">
      <label>
          <span>year  年份</span>
          <input type="text" name="yr">
      </label>
  </div>

  <div class="form-row">
      <label>
          <span>type 分类</span>
          <input type="text" name="ftyp">
      </label>
  </div>

  <div class="form-row">
      <label>
          <span>data source  数据来源</span>
             <select name="src">
                 <option value='' selected>any</option>
                 <option value='CHGIS'>CHGIS  中国历史地理信息系统</option>
                 <option value='TBRC'>Tibetan Buddhist Resource Center</option>
                 <option value='HGR'>Historical Gazettteer of Russia</option>
             </select>
      </label>
  </div>

  <div class="form-row">
      <button type="submit">Submit</button>
  </div>

 </form>

</div>

