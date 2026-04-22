$(function() {
  $('#hamburger').on('click', function() {
    $('#sidebar').toggleClass('open');
    $('#sidebarOverlay').toggleClass('show');
  });
  $('#sidebarOverlay').on('click', function() {
    $('#sidebar').removeClass('open');
    $(this).removeClass('show');
  });


  $(document).on('click', '.todo-star', function() {
    $(this).toggleClass('starred');
    if ($(this).hasClass('starred')) {
      $(this).html('<i class="bi bi-star-fill"></i>');
    } else {
      $(this).html('<i class="bi bi-star"></i>');
    }
  });
  $(document).on('click', '.feed-tab', function() {
    $('.feed-tab').removeClass('active');
    $(this).addClass('active');
  });

  /* ── Mark all as read ── */
  $('.feed-tab-mark').on('click', function() {
    $('.feed-unread').fadeOut(300, function() { $(this).remove(); });
    $(this).text('All read ✓').css('color', 'var(--success)');
  });


  $('.nav-icon').on('click', function() {
    $('.nav-icon').removeClass('active');
    $(this).addClass('active');
  });


  setTimeout(function() {
    $('.prog-fill').each(function() {
      var w = $(this).css('width');
      $(this).css('width', '0').animate({ width: w }, 900);
    });
  }, 400);


  $('.stat-value').each(function() {
    var target = parseInt($(this).text());
    var $el = $(this);
    $({ count: 0 }).animate({ count: target }, {
      duration: 800,
      easing: 'swing',
      step: function() { $el.text(Math.ceil(this.count)); },
      complete: function() { $el.text(target); }
    });
  });


  $('.btn-create').on('click', function() {
    $(this).html('<i class="bi bi-check-lg"></i> Created!').css('background', 'linear-gradient(135deg,#27ae60,#2aabe8)');
    setTimeout(() => {
      $(this).html('<i class="bi bi-plus-lg"></i> Create').css('background', 'linear-gradient(135deg,var(--accent),var(--accent3))');
    }, 1800);
  });


  var years = ['2023-2024','2024-2025','2025-2026','2026-2027'];
  var currentYear = '2025-2026';
  var $ys = $('.year-select');
  $ys.on('click', function(e) {
    e.stopPropagation();
    if ($('#yearDrop').length) { $('#yearDrop').remove(); return; }
    var html = '<div id="yearDrop" style="position:absolute;top:calc(100% + 6px);right:0;background:#fff;border:1px solid var(--border);border-radius:10px;box-shadow:var(--shadow);z-index:999;min-width:130px;overflow:hidden;">';
    years.forEach(function(y) {
      html += '<div class="year-opt" data-y="'+y+'" style="padding:8px 16px;font-size:.8rem;font-weight:600;cursor:pointer;transition:background .15s;'+(y===currentYear?'background:#f0f4ff;color:var(--accent);':'color:var(--text);')+'">' + y + '</div>';
    });
    html += '</div>';
    $ys.css('position','relative').append(html);
  });
  $(document).on('click', '.year-opt', function() {
    currentYear = $(this).data('y');
    $ys.html('<i class="bi bi-calendar3" style="color:var(--accent3)"></i> ' + currentYear + ' <i class="bi bi-chevron-down" style="font-size:.65rem"></i>');
    $('#yearDrop').remove();
  });
  $(document).on('click', function() { $('#yearDrop').remove(); });


  $('[title]').tooltip({ placement: 'right', trigger: 'hover' });


  function checkRight() {
    if ($(window).width() < 1200) {
      
    }
  }
  checkRight();
  $(window).on('resize', checkRight);
});